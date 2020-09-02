OC.L10N.register(
    "files_antivirus",
    {
    "Clean" : "Vyčistiť",
    "Infected" : "Infikované",
    "Unchecked" : "Nekontrolované",
    "Scanner exit status" : "Stav ukončenia skenera",
    "Scanner output" : "Výstup zo skenera",
    "Saving…" : "Ukladanie...",
    "Antivirus" : "Antivírus",
    "File {file} is infected with {virus}" : "Súbor {file} je infikovaný s {virus}",
    "The file has been removed" : "Súbor bol odstránený",
    "File containing {virus} detected" : "Našiel sa súbor obsahujúci {virus}",
    "Antivirus detected a virus" : "Antivírus našiel vírus",
    "Virus %s is detected in the file. Upload cannot be completed." : "V súbore sa našiel vírus %s. Nahrávanie nemôže byť dokončené.",
    "Saved" : "Uložené",
    "Antivirus for files" : "Antivírus pre súbory",
    "An antivirus app for Nextcloud based on ClamAV" : "Antivírusová aplikácia pre Nextcloud založená na ClamAV",
    "Antivirus for files is an antivirus app for Nextcloud based on ClamAV.\n\n* 🕵️‍♂️ When the user uploads a file, it's checked\n* ☢️ Uploaded and infected files will be deleted and a notification will be shown and/or sent via email\n* 🔎 Background Job to scan all files\n\nThis application inspects files that are uploaded to Nextcloud for viruses before they are written to the Nextcloud storage. If a file is identified as a virus, it is either logged or not uploaded to the server. The application relies on the underlying ClamAV virus scanning engine, which the admin points Nextcloud to when configuring the application.\nFor this app to be effective, the ClamAV virus definitions should be kept up to date. Also note that enabling this app will impact system performance as additional processing is required for every upload. More information is available in the Antivirus documentation." : "Antivírus pre súbory je antivírusová aplikácia pre Nextcloud založená na ClamAV.\n\n* 🕵️‍♂️ Keď užívateť nahraje súbor, ten je skontrolovaný\n* ☢️ Nahrané súbory, ktoré sú  infikované budú odstránené a upozornenie sa zobrazí a alebo pošle e-mailom\n* 🔎 Skenovanie všetkých súborov na pozadí\n\nTáto aplikácia preverí súbory, ktoré sú nahrávané na Nextcloud server,  na prítomnosť vírusov, skôr než sú zapísané na úložisko. Keď je v súbore identifikovaný vírus, je to alebo zaznamenané alebo vôbec nie je nahraný na server. Aplikácia ja založená na skenovacom nástroji ClamAV, na ktorý správca nasmeruje Nextcloud pri nastavovaní tejto aplikácie. Aby bola táto aplikácia účinná, je potrebné udržiavať vírusové definície pre ClamAV aktuálne. Tiež je potrebné poznamenať, že zapnutie tejto aplikácie bude mať dopad na výkon systému, pretože pri každom nahratí je potrebné ďalšie spracovanie. Ďalšie informácie sú k dispozícii v dokumentácii k Antivírusu. ",
    "Greetings {user}," : "Vitajte {user},",
    "Sorry, but a malware was detected in a file you tried to upload and it had to be deleted." : "Prepáčte, ale v súbore, ktorý ste sa pokúsili nahrať bol zistený malware a musí byť kvôli tomu vymazaný.",
    "This email is a notification from {host}. Please, do not reply." : "Tento e-mail je notifikácia z {host}. Neodpovedajte naň prosím.",
    "File uploaded: {file}" : "Súbor bol nahratý: {file}",
    "Antivirus for Files" : "Antivírus pre Súbory",
    "Mode" : "Režim",
    "Socket" : "Socket",
    "Clamav Socket." : "Clamav Socket",
    "Not required in Executable Mode." : "Nie je potrebné v spustiteľnom režime",
    "Host" : "Adresa servera",
    "Address of Antivirus Host." : "Adresa servera s antivírusom",
    "Port" : "Port",
    "Port number of Antivirus Host." : "Číslo portu servera s antivírom",
    "Stream Length" : "Veľkosť streamu",
    "ClamAV StreamMaxLength value in bytes." : "ClamAV StreamMaxLenght hodnota v bajtoch",
    "bytes" : "bajty",
    "Path to clamscan" : "Cesta ku clamscan",
    "Path to clamscan executable." : "Cesta k programu clamscan",
    "Not required in Daemon Mode." : "Nie je potrebné v režime Daemon",
    "Extra command line options (comma-separated)" : "Dodatočné voľby pre príkazový riadok (oddelené čiarkou)",
    "File size limit, -1 means no limit" : "Limit veľkosti súboru, -1 pre žiadny limit",
    "Background scan file size limit in bytes, -1 means no limit" : "Limit veľkosti súboru na skenovanie v pozadí, -1 pre žiadny limit",
    "When infected files are found during a background scan" : "Ak sa pri skenovaní na pozadí nájdu infikované súbory",
    "Only log" : "Len zaznamenať",
    "Delete file" : "Zmazať súbor",
    "Save" : "Uložiť",
    "Advanced" : "Pokročilé",
    "Rules" : "Pravidlá",
    "Clear All" : "Vyčistiť všetko",
    "Reset to defaults" : "Obnoviť predvolené",
    "Match by" : "Hľadať zhodu s",
    "Scanner exit status or signature to search" : "Stav výstupu skenera alebo signatúra na vyhľadanie",
    "Description" : "Popis",
    "Mark as" : "Označiť ako",
    "Add a rule" : "Pridať pravidlo",
    "Executable" : "Spustiteľný",
    "Daemon" : "Daemon",
    "Daemon (Socket)" : "Daemon (Socket)"
},
"nplurals=4; plural=(n % 1 == 0 && n == 1 ? 0 : n % 1 == 0 && n >= 2 && n <= 4 ? 1 : n % 1 != 0 ? 2: 3);");
