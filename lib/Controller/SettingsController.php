<?php
/**
 * Copyright (c) 2015 Victor Dubiniuk <victor.dubiniuk@gmail.com>
 * This file is licensed under the Affero General Public License version 3 or
 * later.
 * See the COPYING-README file.
 */

namespace OCA\Files_Antivirus\Controller;

use OCA\Files_Antivirus\Scanner\ScannerFactory;
use OCA\Files_Antivirus\Status;
use \OCP\AppFramework\Controller;
use \OCP\IRequest;
use \OCP\IL10N;
use \OCA\Files_Antivirus\AppConfig;

use \OCP\AppFramework\Http\JSONResponse;

class SettingsController extends Controller {

	/**
	 * @var AppConfig
	 */
	private $settings;

	/**
	 * @var IL10N
	 */
	private $l10n;

	private $scannerFactory;

	public function __construct($appName, IRequest $request, AppConfig $appconfig, IL10N $l10n, ScannerFactory $scannerFactory) {
		parent::__construct($appName, $request);

		$this->settings = $appconfig;
		$this->l10n = $l10n;
		$this->scannerFactory = $scannerFactory;
	}

	/**
	 * Save Parameters
	 *
	 * @AuthorizedAdminSetting(settings=OCA\Files_Antivirus\Settings\Admin)
	 * @param string $avMode - antivirus mode
	 * @param string $avSocket - path to socket (Socket mode)
	 * @param string $avHost - antivirus url
	 * @param int $avPort - port
	 * @param string $avCmdOptions - extra command line options
	 * @param string $avPath - path to antivirus executable (Executable mode)
	 * @param string $avInfectedAction - action performed on infected files
	 * @param $avStreamMaxLength - reopen socket after bytes
	 * @param int $avMaxFileSize - file size limit
	 * @return JSONResponse
	 */
	public function save($avMode, $avSocket, $avHost, $avPort, $avCmdOptions, $avPath, $avInfectedAction, $avStreamMaxLength, $avMaxFileSize) {
		$this->settings->setAvMode($avMode);
		$this->settings->setAvSocket($avSocket);
		$this->settings->setAvHost($avHost);
		$this->settings->setAvPort($avPort);
		$this->settings->setAvCmdOptions($avCmdOptions);
		$this->settings->setAvPath($avPath);
		$this->settings->setAvInfectedAction($avInfectedAction);
		$this->settings->setAvStreamMaxLength($avStreamMaxLength);
		$this->settings->setAvMaxFileSize($avMaxFileSize);

		try {
			$scanner = $this->scannerFactory->getScanner();
			$result = $scanner->scanString("dummy scan content");
			$success = $result->getNumericStatus() == Status::SCANRESULT_CLEAN;
			$message = $success ? $this->l10n->t('Saved') : 'unexpected scan results for test content';
		} catch (\Exception $e) {
			$message = $e->getMessage();
			$success = false;
		}

		return new JSONResponse(
			['data' =>
				['message' => $message],
				'status' => $success ? 'success' : 'error',
				'settings' => $this->settings->getAllValues(),
			]
		);
	}
}
