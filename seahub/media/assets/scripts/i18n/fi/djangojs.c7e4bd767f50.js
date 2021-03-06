

(function(globals) {

  var django = globals.django || (globals.django = {});

  
  django.pluralidx = function(n) {
    var v=(n != 1);
    if (typeof(v) == 'boolean') {
      return v ? 1 : 0;
    } else {
      return v;
    }
  };
  

  /* gettext library */

  django.catalog = django.catalog || {};
  
  var newcatalog = {
    "%curr% of %total%": "%curr% kokonaism\u00e4\u00e4r\u00e4st\u00e4 %total%",
    "(If left blank, owner will be admin)": "(jos j\u00e4tetty tyhj\u00e4ksi, omistaja on admin)",
    "(current notification)": "(nykyinen ilmoitus)",
    "(current version)": "(nykyinen versio",
    "1 Year": "1 Vuosi",
    "1 month ago": "1 kuukausi sitten",
    "1 week ago": "1 viikko sitten",
    "3 days ago": "3 p\u00e4iv\u00e4\u00e4 sitten",
    "30 Days": "30 P\u00e4iv\u00e4\u00e4",
    "7 Days": "7 P\u00e4iv\u00e4\u00e4",
    "A file with the same name already exists in this folder.": "Hakemistossa on jo saman niminen tiedosto.",
    "About": "Tietoa",
    "About Us": "Tietoa meist\u00e4",
    "Accept": "Hyv\u00e4ksy",
    "Accepted": "Hyv\u00e4ksytty",
    "Accepter": "Hyv\u00e4ksyj\u00e4",
    "Access Log": "K\u00e4ytt\u00f6logi",
    "Action": "Toiminto",
    "Actions": "Toiminnot",
    "Activate user immediately after registration. If unchecked, a user need to be activated by administrator or via activation email": "Aktivoi k\u00e4ytt\u00e4j\u00e4 heti rekister\u00f6innin j\u00e4lkeen. Jos ei valittuna, j\u00e4rjestelm\u00e4nvalvojan pit\u00e4\u00e4 aktivoida k\u00e4ytt\u00e4j\u00e4 tai aktivointi s\u00e4hk\u00f6postilla.",
    "Activated": "Aktivoitu",
    "Activated Users": "Aktivoidut k\u00e4ytt\u00e4j\u00e4t",
    "Active": "Aktiivinen",
    "Active Users": "Aktiiviset k\u00e4ytt\u00e4j\u00e4t",
    "Activities": "Aktiviteetit",
    "Add": "Lis\u00e4\u00e4",
    "Add Admins": "Lis\u00e4\u00e4 Yll\u00e4pit\u00e4j\u00e4t",
    "Add Library": "Lis\u00e4\u00e4 kirjasto",
    "Add Member": "Lis\u00e4\u00e4 J\u00e4seni\u00e4",
    "Add Terms and Conditions": "Lis\u00e4\u00e4 K\u00e4ytt\u00f6ehdot",
    "Add User": "Lis\u00e4\u00e4 K\u00e4ytt\u00e4j\u00e4",
    "Add admin": "Lis\u00e4\u00e4 yll\u00e4pit\u00e4j\u00e4",
    "Add auto expiration": "Lis\u00e4\u00e4 automaattinen vanheneminen",
    "Add institution": "Lis\u00e4\u00e4 instituutio",
    "Add new notification": "Lis\u00e4\u00e4 uusi ilmoitus",
    "Add password protection": "Lis\u00e4\u00e4 salasanasuojaus",
    "Add user": "Lis\u00e4\u00e4 k\u00e4ytt\u00e4j\u00e4",
    "Added": "Lis\u00e4tty",
    "Added user {user}": "Lis\u00e4tty k\u00e4ytt\u00e4j\u00e4 {user}",
    "Admin": "Yll\u00e4pit\u00e4j\u00e4",
    "Admin Login Logs": "Admin Kirjautumis Lokit",
    "Admin Logs": "Admin Logit",
    "Admin Operation Logs": "Admin Operaatio Lokit",
    "Admins": "Yll\u00e4pit\u00e4j\u00e4t",
    "All": "Kaikki",
    "All Groups": "Kaikki ryhm\u00e4t",
    "All Notifications": "Kaikki ilmoitukset",
    "All Public Links": "Kaikki julkiset linkit",
    "All file types": "Kaikki tiedostotyypit",
    "Allow new user registrations. Uncheck this to prevent anyone from creating a new account.": "Salli uusien k\u00e4ytt\u00e4jien rekister\u00f6itymisen. Poistamalla t\u00e4m\u00e4n valinnan est\u00e4\u00e4 uusien tilien luonnin.",
    "Allow user to add organization libraries. Otherwise, only system admin can add organization libraries.": "Salli k\u00e4ytt\u00e4j\u00e4n lis\u00e4t\u00e4 organisaation tason kirjastoja. Muutoin, vain j\u00e4rjestelm\u00e4nvalvoja voi tehd\u00e4 organisaatio tason kirjastoja.",
    "Allow user to change library history settings": "Salli k\u00e4ytt\u00e4j\u00e4n muuttaa kirjastohistorian asetuksia",
    "Allow user to create encrypted libraries": "Salli k\u00e4ytt\u00e4j\u00e4n luoda salattuja kirjastoja",
    "An integer that is greater than 0 or equal to -2.": "Integer joka on suurempi kuin 0 tai samansuuruinen kuin -2.",
    "An integer that is greater than or equal to 0.": "Integer joka on suurempi tai samansuuruinen kuin 0.",
    "Anonymous User": "Anonyymi k\u00e4ytt\u00e4j\u00e4",
    "Are you sure to delete": "Haluatko varmasti poistaa",
    "Are you sure you want to clear trash?": "Oletko varma, ett\u00e4 haluat tyhjent\u00e4\u00e4 roskakorin?",
    "Are you sure you want to delete %s ?": "Haluatko varmasti poistaa %s ?",
    "Are you sure you want to delete the selected user(s) ?": "Oletko varma, ett\u00e4 haluat poistaa valitun k\u00e4ytt\u00e4j\u00e4n (k\u00e4ytt\u00e4j\u00e4t)?",
    "Are you sure you want to restore this library?": "Oletko varma, ett\u00e4 haluat palauttaa t\u00e4m\u00e4n kirjaston?",
    "Are you sure you want to unlink this device?": "Oletko varma, ett\u00e4 haluat poistaa yhdistetyn laitteen?",
    "Audio": "Audio",
    "Audit Admin": "Auditoinnin p\u00e4\u00e4k\u00e4ytt\u00e4j\u00e4",
    "Avatar": "Avatar",
    "Avatar:": "Avatar:",
    "Back": "Takaisin",
    "Branding": "Br\u00e4nd\u00e4ys",
    "Broken (please contact your administrator to fix this library)": "Virheellinen (ole hyv\u00e4 ja ota yhteytt\u00e4 j\u00e4rjestelm\u00e4n yll\u00e4pit\u00e4j\u00e4\u00e4n korjataksesi t\u00e4m\u00e4n kirjaston)",
    "Can not copy directory %(src)s to its subdirectory %(des)s": "Hakemistoa %(src)s ei voi kopioida sen alihakemistoon %(des)s",
    "Can not move directory %(src)s to its subdirectory %(des)s": "Hakemistoa %(src)s ei voi siirt\u00e4\u00e4 sen alihakemistoon %(des)s",
    "Cancel": "Peruuta",
    "Cancel All": "Peruuta kaikki",
    "Change": "Muuta",
    "Change Password": "Vaihda salasana",
    "Change Password of Library {placeholder}": "Vaihda kirjaston {placeholder} salasana",
    "Clean": "Siivoa",
    "Clear": "Tyhjenn\u00e4",
    "Clear Trash": "Tyhjenn\u00e4 Roskakori",
    "Clear files in trash and history\uff1a": "Poista historia ja tiedostot roskakorista :",
    "Clients": "Asiakasohjelmat",
    "Close": "Sulje",
    "Close (Esc)": "Sulje (Esc)",
    "Comment": "Kommentti",
    "Comments": "Kommentit",
    "Community Edition": "Community versio",
    "Confirm Password": "Vahvista salasana",
    "Contact Email": "Yhteyss\u00e4hk\u00f6posti",
    "Contact Email:": "S\u00e4hk\u00f6posti",
    "Copy": "Kopioi",
    "Copy selected item(s) to:": "Kopioi valitut kohteet:",
    "Count": "M\u00e4\u00e4r\u00e4",
    "Create Group": "Luo Ryhm\u00e4",
    "Create Library": "Luo Kirjasto",
    "Created": "Luotu",
    "Created At": "Luotu",
    "Created group {group_name}": "Luotu ryhm\u00e4 {group_name}",
    "Created library": "Luotiin kirjasto",
    "Created library {library_name} with {owner} as its owner": "Kirjasto {library_name} luotu omistajana {owner} ",
    "Creator": "Luoja",
    "Current Connected Devices": "Nykyiset Yhdistetyt Laitteet",
    "Current Library": "Nykyinen kirjasto",
    "Current Path: ": "Nykyinen polku:",
    "Current Version": "Nykyinen versio",
    "Current path: ": "Nykyinen polku:",
    "Custom CSS": "Muokattu CSS",
    "Custom file types": "Muokatut tiedostotyypit",
    "Daily Admin": "P\u00e4\u00e4k\u00e4ytt\u00e4j\u00e4 p\u00e4ivitt\u00e4isille teht\u00e4ville",
    "Database": "Tietokanta",
    "Date": "P\u00e4iv\u00e4ys",
    "Default": "Oletus",
    "Default Admin": "Oletus p\u00e4\u00e4k\u00e4ytt\u00e4j\u00e4",
    "Delete": "Poista",
    "Delete Account": "Poista tili",
    "Delete Department": "Poista Osasto.",
    "Delete Expired Invitations": "Poista vanhentuneet kutsut",
    "Delete Group": "Tuhoa Ryhm\u00e4",
    "Delete Institution": "Poista instituutio",
    "Delete Library": "Tuhoa Kirjasto",
    "Delete Member": "Poista J\u00e4sen",
    "Delete Notification": "Poista ilmoitus",
    "Delete Time": "Poistoaika",
    "Delete User": "Poista k\u00e4ytt\u00e4j\u00e4",
    "Delete files from this device the next time it comes online.": "Poista tiedostot t\u00e4st\u00e4 laitteesta kun se seuraavan kerran tulee verkkoon.",
    "Deleted": "Poistettu",
    "Deleted Libraries": "Poistetut Kirjastot",
    "Deleted Time": "Poistoaika",
    "Deleted directories": "Poistetut hakemistot",
    "Deleted files": "Poistetut tiedostot",
    "Deleted group {group_name}": "Tuhottu ryhm\u00e4 {group_name}",
    "Deleted library": "Poistettu kirjasto",
    "Deleted library {library_name}": "Poistettu kirjasto {library_name}",
    "Deleted user {user}": "Poistettu k\u00e4ytt\u00e4j\u00e4 {user}",
    "Departments": "Osastot",
    "Description": "Kuvaus",
    "Desktop": "Desktop",
    "Detail": "Selite",
    "Details": "Yksityiskohdat",
    "Device": "Laite",
    "Device Name": "Laitteen nimi",
    "Devices": "Laitteet",
    "Directory": "Hakemisto",
    "Disable Two-Factor Authentication": "Poista kaksisuuntainen tunnistautuminen k\u00e4yt\u00f6st\u00e4",
    "Document convertion failed.": "Dokumentin konversio ep\u00e4onnistui.",
    "Documents": "Dokumentit",
    "Don't keep history": "\u00c4l\u00e4 pid\u00e4 historiaa",
    "Don't replace": "\u00c4l\u00e4 korvaa",
    "Download": "Lataa",
    "Download an example file": "Lataa esimerkkitiedosto",
    "Edit": "Muokkaa",
    "Edit failed.": "Muokkaus ep\u00e4onnistui.",
    "Edit labels": "Muokkaa etikettej\u00e4",
    "Edit on cloud and download": "Muokkaa pilvess\u00e4 ja lataa",
    "Edit succeeded": "Muokkaus onnistui",
    "Email": "S\u00e4hk\u00f6posti",
    "Emails, separated by ','": "S\u00e4hk\u00f6postit, erotellaan ',' merkill\u00e4",
    "Enable Two-Factor Authentication": "Ota k\u00e4ytt\u00f6\u00f6n Kaksisuuntainen Tunnistautuminen",
    "Enable system admin to add Terms and Conditions, and all users will have to accept the terms.": "Anna j\u00e4rjestelm\u00e4nvalvojan ottaa k\u00e4ytt\u00f6\u00f6n ehdot ja edellytykset ja kaikkien k\u00e4ytt\u00e4jien on hyv\u00e4ksytt\u00e4v\u00e4 ehdot.",
    "Enable two factor authentication": "Ota k\u00e4ytt\u00f6\u00f6n kaksisuuntainen tunnistautuminen",
    "Enable users to share libraries to any groups in the system.": "Salli k\u00e4ytt\u00e4jien jakaa kirjastoja kaikille systeemin ryhmille.",
    "Encrypt": "Salattu",
    "Encrypted library": "Salattu kirjasto",
    "Error": "Virhe",
    "Errors": "Virheet",
    "Exit System Admin": "Pois j\u00e4rjestelm\u00e4n hallinnasta",
    "Expiration": "P\u00e4\u00e4ttyminen",
    "Expired": "Vanhentunut",
    "Expired at": "Vanhentunut",
    "Export Excel": "Vie Exceliin",
    "Extensions of text files that can be online previewed, each suffix is separated by a comma.": "Tekstitiedostojen laajennukset joita voi esikatsella verkossa, jokainen j\u00e4lkiliite erotetaan pilkulla.",
    "Failed": "Ep\u00e4onnistui",
    "Failed to copy %(name)s": "%(name)s kopiointi ep\u00e4onnistui.",
    "Failed. Please check the network.": "Ep\u00e4onnistui. Ole hyv\u00e4 ja tarkista verkkoyhteys.",
    "Favorites": "Suosikit",
    "File": "Tiedosto",
    "File Access": "Tiedoston k\u00e4ytt\u00f6oikeudet",
    "File Operations": "Tiedosto Operaatiot",
    "File Update": "Tiedosto p\u00e4ivitys",
    "File Upload": "Tiedoston l\u00e4hett\u00e4minen ",
    "File Uploading...": "Tiedostoa l\u00e4hetet\u00e4\u00e4n...",
    "File download is disabled: the share link traffic of owner is used up.": "Tiedoston lataus on suljettu: linkin omistajan kaista on t\u00e4ynn\u00e4.",
    "Files": "Tiedostot",
    "Folder": "Hakemisto",
    "Folder Permission": "Hakemiston oikeudet",
    "Folders": "Hakemistot",
    "Force user to change password when account is newly added or reset by admin": "Pakota k\u00e4ytt\u00e4j\u00e4n vaihtamaan salasana jos tili on juuri lis\u00e4tty tai resetoitu j\u00e4rjestelm\u00e4nvalvojan toimesta ",
    "Force user to use a strong password when sign up or change password.": "Pakota k\u00e4ytt\u00e4m\u00e4\u00e4n vahvaa salasanaa tili\u00e4 tehdess\u00e4 tai kun salasanaa vaihdetaan.",
    "Freeze user account when failed login attempts exceed limit.": "J\u00e4\u00e4dyt\u00e4 k\u00e4ytt\u00e4j\u00e4tili liian monen ep\u00e4onnistuneen kirjautumisyrityksen j\u00e4lkeen.",
    "Generate": "Luo",
    "Global Address Book": "Globaali Osoitekirja",
    "Grid": "Ruudukko",
    "Group": "Ryhm\u00e4",
    "Group Permission": "Ryhm\u00e4n oikeudet",
    "Groups": "Ryhm\u00e4t",
    "Guest": "Vieras",
    "Handled": "K\u00e4sitelty",
    "Help": "Tuki",
    "History": "Historia",
    "History Setting": "Historian asetukset",
    "IP": "IP",
    "If turn on, the desktop clients will not be able to sync a folder outside the default Seafile folder.": "Jos valittuna, ty\u00f6asema asiakasohjelmat eiv\u00e4t voi synkronoida kansioita Seafile oletuskansio ulkopuolelta.",
    "If you don't have any device with you, you can access your account using backup codes.": "Jos teill\u00e4 ei ole mit\u00e4\u00e4n laitteita mukana, voit p\u00e4\u00e4st\u00e4 k\u00e4ytt\u00e4m\u00e4\u00e4n tili\u00e4si varakoodeilla.",
    "Image": "Kuva",
    "Images": "Kuvat",
    "Import Members": "Tuo j\u00e4seni\u00e4",
    "Import users from a .xlsx file": "Tuo k\u00e4ytt\u00e4ji\u00e4 .xlsx tiedostosta",
    "In all libraries": "Kaikissa kirjastoissa",
    "Inactive": "Ei aktiivinen",
    "Info": "Info",
    "Input file extensions here, separate with ','": "Sy\u00f6t\u00e4 tiedostop\u00e4\u00e4tteet t\u00e4nne, erotettuna merkill\u00e4 ','",
    "Institution": "Instituutio",
    "Institutions": "Instituutiot",
    "Internal Server Error": "Sis\u00e4inen palvelinvirhe",
    "Invalid destination path": "Virheellinen kohdepolku",
    "Invitations": "Kutsut",
    "Invite Time": "Kutsu Aika",
    "Invited at": "Kutsuttu",
    "Inviter": "Kutsuja",
    "It is required.": "Vaaditaan",
    "Keep full history": "Pid\u00e4 t\u00e4ysi historia",
    "LDAP": "LDAP",
    "LDAP(imported)": "LDAP(tuotu)",
    "Labels": "Etiketit",
    "Language": "Kieli",
    "Language Setting": "Kieliasetus",
    "Last Access": "Viimeisin k\u00e4ytt\u00f6",
    "Last Login": "Viimeisin kirjautuminen",
    "Last Update": "Viimeisin p\u00e4ivitys",
    "Leave Share": "Poistu jaosta",
    "Libraries": "Kirjastot",
    "Library": "Kirjasto",
    "Library Type": "Kirjaston tyyppi",
    "Limits": "Rajat",
    "Link": "Linkki",
    "Linked Devices": "Yhdistetyt Laitteet",
    "Links": "Linkit",
    "List": "Listaa",
    "List your account in global address book, so that others can find you by typing your name.": "Listaa tilisi globaalissa osoitelistassa, jotta muut l\u00f6yt\u00e4v\u00e4t teid\u00e4t kirjoittamalla nimenne.",
    "Location": "Sijainti",
    "Lock": "Lukitse",
    "Log out": "Kirjaudu ulos",
    "Login Background Image": "Kirjautumisikkunan Taustakuva",
    "Logs": "Logi",
    "Manage Members": "Hallitse j\u00e4seni\u00e4",
    "Mark all read": "Merkitse kaikki luetuksi",
    "Member": "J\u00e4sen",
    "Members": "J\u00e4senet",
    "Message": "Viesti",
    "Message (optional):": "Viesti (valinnainen)",
    "Mobile": "Mobile",
    "Modification Details": "Muokkauksen yksityiskohdat",
    "Modified": "Muokattu",
    "Modified files": "Muokatut tiedostot",
    "Modifier": "Muokkaaja",
    "Month:": "Kuukausi:",
    "More": "Lis\u00e4\u00e4",
    "More Operations": "Lis\u00e4\u00e4 toimintoja",
    "Move": "Siirr\u00e4",
    "Move selected item(s) to:": "Siirr\u00e4 valitut kohteet:",
    "My Groups": "Omat ryhm\u00e4t",
    "My Libraries": "Minun Kirjastot",
    "Name": "Nimi",
    "Name is required": "Nimi vaaditaan",
    "Name is required.": "Nimi vaaditaan.",
    "Name should not include '/'.": "Nimi ei voi sis\u00e4lt\u00e4\u00e4 '/'",
    "Name(optional)": "Nimi(valinnainen)",
    "Network error": "Verkkovirhe",
    "New": "Uusi",
    "New Department": "Uusi Osasto",
    "New Department Library": "Uusi Osastokirjasto",
    "New Excel File": "Uusi Excel tiedosto",
    "New File": "Uusi Tiedosto",
    "New Folder": "Uusi Hakemisto",
    "New Group": "Uusi ryhm\u00e4",
    "New Library": "Uusi Kirjasto",
    "New Markdown File": "Uusi Markdown tiedosto",
    "New Password": "Uusi salasana",
    "New Password Again": "Uusi salasana uudestaan",
    "New PowerPoint File": "Uusi PowerPoint tiedosto",
    "New Sub-department": "Uusi Aliosasto",
    "New Wiki": "Uusi Wiki",
    "New Word File": "Uusi Word tiedosto",
    "New directories": "Uudet hakemistot",
    "New files": "Uudet tiedostot",
    "New password is too short": "Uusi salasana on liian lyhyt",
    "New passwords don't match": "Uudet salasanat eiv\u00e4t t\u00e4sm\u00e4\u00e4",
    "Next": "Seuraava",
    "Next (Right arrow key)": "Seuraava (Oikea nuolin\u00e4pp\u00e4in)",
    "No comment yet.": "Ei kommentteja viel\u00e4.",
    "No connected devices": "Ei yhdistettyj\u00e4 laitteita",
    "No departments": "Ei osastoja",
    "No groups": "Ei ryhmi\u00e4",
    "No libraries": "Ei kirjastoja",
    "No libraries have been shared with you": "Sinun kanssasi ei ole jaettu kirjastoja",
    "No members": "Ei j\u00e4seni\u00e4",
    "No public libraries": "Ei julkisia kirjastoja",
    "No result": "Ei tulosta",
    "No sub-departments": "Ei aliosastoja",
    "No sync errors": "Ei synkronointi virheit\u00e4",
    "None": "Ei mit\u00e4\u00e4n",
    "Note: Settings via web interface are saved in database table (seahub-db/constance_config). They have a higher priority over the settings in config files.": "Huom: Web sivuston kautta tehdyt asetukset tallennetaan tietokannan (seahub-db/constance_config) tauluun. N\u00e4ill\u00e4 asetuksilla on suurempi prioriteetti kuin config tiedostoissa olevilla asetuksilla.",
    "Notification Detail": "Ilmoituksen sis\u00e4lt\u00f6",
    "Notifications": "Ilmoitukset",
    "Number of days that keep user sign in.": "P\u00e4ivien m\u00e4\u00e4r\u00e4 jona pidet\u00e4\u00e4n k\u00e4ytt\u00e4j\u00e4 sis\u00e4\u00e4nkirjautuneena.",
    "Number of groups": "Ryhmien m\u00e4\u00e4r\u00e4",
    "Off": "Off",
    "Old Password": "Vanha salasana",
    "On": "On",
    "Online Preview": "Online esikatselu",
    "Only Show": "N\u00e4yt\u00e4 vain",
    "Only keep a period of history:": "Pid\u00e4 historia ainoastaan tietyn ajan:",
    "Open in New Tab": "Avaa uudessa v\u00e4lilehdess\u00e4",
    "Open parent folder": "Avaa is\u00e4nt\u00e4kansio",
    "Open via Client": "Avaa asiakasohjelmassa",
    "Operation": "Toimenpide",
    "Operation succeeded.": "Operaatio onnistui.",
    "Operations": "Toiminnot",
    "Organization": "Organisaatio",
    "Organization Admin": "Organisaation hallinnoija",
    "Organizations": "Organisaatiot",
    "Other Libraries": "Muut kirjastot",
    "Out of quota.": "Tila loppu.",
    "Owner": "Omistaja",
    "Owner can use admin panel in an organization, must be a new account.": "Omistaja voi k\u00e4ytt\u00e4\u00e4 organisaation yll\u00e4pitopaneelia, t\u00e4ytyy olla uusi tili.",
    "Packaging...": "Pakataan...",
    "Password": "Salasana",
    "Password again": "Salasana uudestaan",
    "Password is too short": "Salasana on liian lyhyt",
    "Password:": "Salasana:",
    "Passwords don't match": "Salasanat eiv\u00e4t t\u00e4sm\u00e4\u00e4",
    "Permission": "Oikeus",
    "Permission denied": "Lupa ev\u00e4tty",
    "Platform": "Alusta",
    "Please check the network.": "Ole hyv\u00e4 ja tarkista verkko.",
    "Please choose a .xlsx file.": "Ole hyv\u00e4 ja valitse .xlsx tiedosto.",
    "Please enter 1 or more character": "Ole hyv\u00e4 ja sy\u00f6t\u00e4 1 tai useampi merkki",
    "Please enter a new password": "Ole hyv\u00e4 ja anna uusi salasana",
    "Please enter days": "Ole hyv\u00e4 ja sy\u00f6t\u00e4 p\u00e4iv\u00e4t",
    "Please enter password": "Ole hyv\u00e4 ja sy\u00f6t\u00e4 salasana",
    "Please enter the new password again": "Ole hyv\u00e4 ja anna uusi salasana uudelleen",
    "Please enter the old password": "Ole hyv\u00e4 ja anna vanha salasana",
    "Please enter the password again": "Ole hyv\u00e4 ja sy\u00f6t\u00e4 salasana uudelleen",
    "Please input at least an email.": "Ole hyv\u00e4 ja sy\u00f6t\u00e4 ainakin s\u00e4hk\u00f6posti.",
    "Preview and download": "Esikatsele ja lataa",
    "Preview only": "Esikatselu ainoastaan",
    "Previous": "J\u00e4lkimm\u00e4inen",
    "Previous (Left arrow key)": "Edellinen (Vasen nuolin\u00e4pp\u00e4in)",
    "Professional Edition": "Professional Edition",
    "Profile": "Profiili",
    "Profile Setting": "Profiilin asetus",
    "Quota": "Kiinti\u00f6",
    "Read-Only": "Vain-Luku",
    "Read-Only library": "Vain luku kirjasto",
    "Read-Write": "Luku-Kirjoitus",
    "Read-Write library": "Luku-kirjoitus kirjasto",
    "Really want to delete your account?": "Haluatko varmasti poistaa tilin?",
    "Refresh": "P\u00e4ivit\u00e4",
    "Remove": "Poista",
    "Removed all items from trash.": "Poistettu kaikki kohteet roskiksesta.",
    "Removed items older than {n} days from trash.": "Poistettu kohteita roskiksesta jotka ovat vanhempia kuin {n} p\u00e4iv\u00e4\u00e4.",
    "Rename": "Nime\u00e4 uudelleen",
    "Rename File": "Nime\u00e4 tiedosto uudelleen",
    "Rename Folder": "Nime\u00e4 kansio uudelleen",
    "Renamed or Moved files": "Uudelleen nimetyt tai siirretyt tiedostot",
    "Replace": "Korvaa",
    "Replace file {filename}?": "Korvaa tiedosto {filename}?",
    "Replacing it will overwrite its content.": "Korvaaminen kirjoittaa sis\u00e4ll\u00f6n yli.",
    "Reset Password": "Nollaa salasana",
    "ResetPwd": "Nollaa salasana",
    "Restore": "Palauta",
    "Restore Library": "Palauta Kirjasto",
    "Result": "Tulos",
    "Revoke Admin": "Kumoa yll\u00e4pit\u00e4j\u00e4",
    "Role": "Rooli",
    "Saving...": "Tallennetaan...",
    "Seafile": "Seafile",
    "Search Files": "Etsi tiedostoja",
    "Search files in this library": "Etsi tiedostoja t\u00e4st\u00e4 kirjastosta",
    "Search groups": "Etsi ryhmi\u00e4",
    "Search users...": "Etsi k\u00e4ytt\u00e4ji\u00e4...",
    "See All Notifications": "Katso kaikki ilmoitukset",
    "Select a group": "Valitse ryhm\u00e4",
    "Select libraries to share": "Valitse jaettavat kirjastot",
    "Send": "L\u00e4het\u00e4",
    "Send activation Email after user registration.": "L\u00e4het\u00e4 aktivointis\u00e4hk\u00f6posti k\u00e4ytt\u00e4j\u00e4n rekister\u00f6itymisen j\u00e4lkeen.",
    "Send to:": "L\u00e4het\u00e4 kohteeseen:",
    "Sending...": "L\u00e4hett\u00e4\u00e4...",
    "Server Version: ": "Palvelimen versio:",
    "Set Admin": "Aseta p\u00e4\u00e4k\u00e4ytt\u00e4j\u00e4",
    "Set Quota": "Aseta kiinti\u00f6",
    "Set permission": "Aseta oikeudet",
    "Set to current": "Aseta nykyiseksi",
    "Set user contact email": "Aseta k\u00e4ytt\u00e4j\u00e4n s\u00e4hk\u00f6posti yhteystieto",
    "Set user name": "Aseta k\u00e4ytt\u00e4j\u00e4tunnus",
    "Set {placeholder}'s permission": "Aseta oikeudet kohteelle {placeholder} ",
    "Settings": "Asetukset",
    "Share": "Jaa",
    "Share Admin": "Jakojen hallinta",
    "Share From": "Jaettu kohteesta",
    "Share Link": "Jakolinkki",
    "Share Links": "Jakolinkit",
    "Share To": "Jaa",
    "Share existing libraries": "Jaa olemassa olevia kirjastoja",
    "Share to group": "Jaa ryhm\u00e4lle",
    "Share to user": "Jaa k\u00e4ytt\u00e4j\u00e4lle",
    "Shared By": "Jakaja",
    "Shared Links": "Jaetut linkit",
    "Shared by: ": "Jakaja:",
    "Shared with all": "Jaettu kaikille",
    "Shared with groups": "Jaettu ryhmille",
    "Shared with me": "Jaettu minulle",
    "Show Codes": "N\u00e4yt\u00e4 Koodit",
    "Side Nav Menu": "Sivu Navigointi -valikko",
    "Site name used in email sending": "K\u00e4ytet\u00e4\u00e4n sivuston nime\u00e4 s\u00e4hk\u00f6postin l\u00e4hetyksess\u00e4",
    "Site title shown in a browser tab": "Sivuston titteli n\u00e4ytet\u00e4\u00e4n selaimen v\u00e4lisivulla.",
    "Size": "Koko",
    "Space Used": "Tilaa k\u00e4ytetty",
    "Space Used / Quota": "K\u00e4ytetty Tila / Kiinti\u00f6",
    "Statistic": "Tilastot",
    "Status": "Tila",
    "Storage": "Tila",
    "Storage Used": "K\u00e4ytetty tila",
    "Sub-departments": "Aliosastot",
    "Submit": "Hyv\u00e4ksy",
    "Success": "Onnistui",
    "Successfully added label(s) for library {placeholder}": "Onnistuneesti lis\u00e4tty etiketti(t) kirjastolle {placeholder}",
    "Successfully changed library password.": "Kirjaston salasana vaihdettu onnistuneesti.",
    "Successfully copied %(name)s and %(amount)s other items.": "Kopioitiin onnistuneesti %(name)s ja %(amount)s muuta kohdetta.",
    "Successfully copied %(name)s and 1 other item.": "Kopioitiin onnistuneesti %(name)s ja 1 muu kohde.",
    "Successfully copied %(name)s.": "%(name)s kopioitiin onnistuneesti.",
    "Successfully deleted %s": "Poistettu onnistuneesti %s",
    "Successfully deleted 1 item.": "Onnistuneesti tuhottu 1 kohde.",
    "Successfully edited labels.": "Onnistuneesti muokattu etikettej\u00e4.",
    "Successfully invited %(email) and %(num) other people.": "Onnistuneesti kutsuttu %(email) ja %(num) muuta k\u00e4ytt\u00e4j\u00e4\u00e4.",
    "Successfully invited %(email).": "Onnistuneesti kutsuttu %(email).",
    "Successfully moved %(name)s and %(amount)s other items.": "Siirrettiin onnistuneesti %(name)s ja %(amount)s muuta kohdetta.",
    "Successfully moved %(name)s and 1 other item.": "Siirrettiin onnistuneesti %(name)s ja 1 muu kohde.",
    "Successfully moved %(name)s.": "%(name)s siirretty onnistuneesti.",
    "Successfully reset password to %(passwd)s for user %(user)s.": "Salasana nollattu onnistuneesti. Uusi salasana k\u00e4ytt\u00e4j\u00e4lle %(user)s on %(passwd)s.",
    "Successfully restored 1 item.": "Onnistuneesti palautettu 1 kohde.",
    "Successfully restored the library.": "Kirjasto palautettu onnistuneesti.",
    "Successfully revoke the admin permission of %s": "Yll\u00e4pit\u00e4j\u00e4n oikeudet poistettu onnistuneesti k\u00e4ytt\u00e4j\u00e4lt\u00e4 %s",
    "Successfully sent to {placeholder}": "L\u00e4hetetty onnistuneesti kohteeseen {placeholder}",
    "Successfully set %s as admin.": "Onnistuneesti asetettu %s yll\u00e4pit\u00e4j\u00e4ksi",
    "Successfully set library history.": "Kirjaston historia asetettu onnistuneesti.",
    "Successfully transferred the group.": "Ryhm\u00e4 siirrettiin onnistuneesti.",
    "Successfully transferred the library.": "Kirjasto siirretty onnistuneesti.",
    "Successfully unshared library {placeholder}": "Kirjaston jako {placeholder} poistettiin onnistuneesti",
    "Sync": "Synkronoi",
    "System": "J\u00e4rjestelm\u00e4",
    "System Admin": "J\u00e4rjestelm\u00e4n hallinta",
    "System Info": "J\u00e4rjestelm\u00e4n info",
    "Tags": "Tagit",
    "Template": "Pohja",
    "Terms": "Ehdot",
    "Terms and Conditions": "K\u00e4ytt\u00f6ehdot",
    "Text": "Teksti",
    "Text files": "Tekstitiedostot",
    "The URL of the server, like https://seafile.example.com or http://192.168.1.2:8000": "Palvelimen URL, kuten https://seafile.example.com tai http://192.168.1.2:8000",
    "The internal URL for downloading/uploading files. Users will not be able to download/upload files if this is not set correctly. If you config Seafile behind Nginx/Apache, it should be SERVICE_URL/seafhttp, like https://seafile.example.com/seafhttp .": "Sis\u00e4inen URL latauksia/l\u00e4hetyksi\u00e4 varten. K\u00e4ytt\u00e4j\u00e4t eiv\u00e4t voi ladata/l\u00e4hett\u00e4\u00e4 tiedostoja jos sit\u00e4 ei ole m\u00e4\u00e4ritetty oikein. Jos Seafile on asennettu Nginx/Apache taakse, sen pit\u00e4isi olla SERVICE_URL/seafhttp, kuten https://seafile.example.com/seafhttp .",
    "The least number of characters an account password should include.": "V\u00e4himm\u00e4ism\u00e4\u00e4r\u00e4 merkeille k\u00e4ytt\u00e4j\u00e4tunnuksen salasanassa.",
    "The least number of characters an encrypted library password should include.": "V\u00e4himm\u00e4ism\u00e4\u00e4r\u00e4 merkeille salatun kirjaston salasanassa.",
    "The level(1-4) of an account password's strength. For example, '3' means password must have at least 3 of the following: num, upper letter, lower letter and other symbols": "Taso(1-4) tilin salasanan vahvuus. Esimerkiksi, '3' tarkoittaa salasanan pit\u00e4\u00e4 sis\u00e4lt\u00e4\u00e4 seuraavat, numero, iso kirjain, pieni kirjain ja muita symboleja.",
    "The maximum number of failed login attempts before showing CAPTCHA.": "Enimm\u00e4ism\u00e4\u00e4r\u00e4 ep\u00e4onnistuneita kirjautumisyrityksi\u00e4 ennen CAPTCHA n\u00e4ytt\u00e4mist\u00e4.",
    "The owner of this library has run out of space.": "T\u00e4m\u00e4n kirjaston omistaja on ylitt\u00e4nyt levykiinti\u00f6n.",
    "The password will be kept in the server for only 1 hour.": "Salasanaa pidet\u00e4\u00e4n palvelimella vain 1 tunti.",
    "This is a special group representing a department.": "T\u00e4m\u00e4 on erityisryhm\u00e4, joka edustaa osastoa.",
    "This library is password protected": "T\u00e4m\u00e4 hakemisto on suojattu salasanalla",
    "This operation will not be reverted. Please think twice!": "T\u00e4t\u00e4 toimintoa ei voi perua. Ole hyv\u00e4 ja harkitse kahdesti!",
    "Time": "Aika",
    "Tip: -2 means no limit.": "Vinkki: -2 tarkoittaa ei rajaa.",
    "Tip: 0 means default limit": "Vinkki: 0 tarkoittaa oletuskiinti\u00f6t\u00e4",
    "Tip: a snapshot will be generated after modification, which records the library state after the modification.": "Vinkki: Kirjaston tilannekuva tallennetaan muokkauksen j\u00e4lkeen.",
    "Tip: you can search by keyword in name.": "Vinkki: voit etsi\u00e4 hakusanalla nimest\u00e4.",
    "Token": "Varmenne",
    "Tools": "Ty\u00f6kalut",
    "Total Devices": "Laitteita yhteens\u00e4",
    "Total Users": "K\u00e4ytt\u00e4ji\u00e4 yhteens\u00e4",
    "Traffic": "Liikenne",
    "Transfer": "Siirr\u00e4",
    "Transfer Group": "Siirr\u00e4 Ryhm\u00e4",
    "Transfer Library": "Siirr\u00e4 Kirjasto",
    "Transferred group {group_name} from {user_from} to {user_to}": "Siirr\u00e4 ryhm\u00e4 {group_name} k\u00e4ytt\u00e4j\u00e4lt\u00e4 {user_from} k\u00e4ytt\u00e4j\u00e4lle {user_to}",
    "Transferred library {library_name} from {user_from} to {user_to}": "Siirr\u00e4 kirjasto {library_name} k\u00e4ytt\u00e4j\u00e4lt\u00e4 {user_from} k\u00e4ytt\u00e4j\u00e4lle {user_to}",
    "Trash": "Roskakori",
    "Two-Factor Authentication": "Kaksisuuntainen tunnistautuminen",
    "Two-factor authentication is not enabled for your account. Enable two-factor authentication for enhanced account security.": "Kaksitasoinen todennus ei ole k\u00e4yt\u00f6ss\u00e4 tiliss\u00e4si. Ota kaksitasoinen tunnistus k\u00e4ytt\u00f6\u00f6n suojataksesi paremmin tilisi.",
    "Type": "Tyyppi",
    "Unknown": "Tuntematon",
    "Unlink": "Poista linkki",
    "Unlink device": "Poista yhdistetty laite",
    "Unlock": "Poista lukitus",
    "Unshare": "Poista jako",
    "Unshare Library": "Poista kirjaton jako",
    "Unstar": "Poista merkint\u00e4",
    "Update": "P\u00e4ivit\u00e4",
    "Update Terms and Conditions": "P\u00e4ivit\u00e4 K\u00e4ytt\u00f6ehdot",
    "Upgrade to Pro Edition": "P\u00e4ivit\u00e4 Pro versioon",
    "Upload": "Lis\u00e4\u00e4",
    "Upload Files": "Lis\u00e4\u00e4 tiedostoja",
    "Upload Folder": "Lis\u00e4\u00e4 kansio",
    "Upload Link": "L\u00e4hetyslinkki",
    "Upload Links": "L\u00e4hetyslinkit",
    "Upload file": "Lis\u00e4\u00e4 tiedosto",
    "Use custom CSS": "K\u00e4yt\u00e4 muokattua CSS",
    "Used:": "K\u00e4ytetty:",
    "User": "K\u00e4ytt\u00e4j\u00e4",
    "User Permission": "K\u00e4ytt\u00e4j\u00e4n oikeudet",
    "Username:": "K\u00e4ytt\u00e4j\u00e4nimi:",
    "Users": "K\u00e4ytt\u00e4j\u00e4t",
    "Version": "Versiot",
    "Version Number": "Versionumero",
    "Video": "Video",
    "View": "Katso",
    "View Snapshot": "Katso tilannekuva",
    "Virus File": "Virustiedosto",
    "Virus Scan": "Virusskannaus",
    "Visited": "Vierailtu",
    "Visits": "Vierailut",
    "Web Traffic": "Web Liikenne",
    "Wrong password": "V\u00e4\u00e4r\u00e4 salasana",
    "You can also add a user as a guest, who will not be allowed to create libraries and groups.": "Voit my\u00f6s lis\u00e4t\u00e4 k\u00e4ytt\u00e4j\u00e4n vieraaksi jotka eiv\u00e4t voi luoda kirjastoja ja ryhmi\u00e4.",
    "You can create libraries by clicking the \"New Library\" button above.": "Voit luoda kirjastoja painamalla \"Uusi Kirjasto\" nappia ylh\u00e4\u00e4ll\u00e4.",
    "You can use this field at login.": "Voit k\u00e4ytt\u00e4\u00e4 t\u00e4t\u00e4 kentt\u00e4\u00e4 kirjautumisessa.",
    "You don't have any upload links": "Sinulla ei ole yht\u00e4\u00e4n l\u00e4hetyslinkki\u00e4",
    "You have not shared any folders": "Et ole jakanut yht\u00e4\u00e4n hakemistoa",
    "Your notifications will be sent to this email.": "Sinun ilmoitukset l\u00e4hetet\u00e4\u00e4n t\u00e4h\u00e4n s\u00e4hk\u00f6postiin.",
    "activate after registration": "aktivoi rekister\u00f6innin j\u00e4lkeen",
    "all": "kaikki",
    "all members": "kaikki k\u00e4ytt\u00e4j\u00e4t",
    "allow new registrations": "salli uudet rekister\u00f6itymiset",
    "days": "p\u00e4iv\u00e4\u00e4",
    "file": "tiedosto",
    "icon": "ikoni",
    "keep sign in": "pid\u00e4 sis\u00e4\u00e4nkirjautuneena",
    "library password minimum length": "kirjasto salasanan minimipituus",
    "locked": "lukittu",
    "name": "nimi",
    "password minimum length": "salasanan minimi pituus",
    "password strength level": "salasanan vahvuus taso",
    "send activation email": "l\u00e4het\u00e4 aktivointis\u00e4hk\u00f6posti",
    "shared by:": "jakaja:",
    "starred": "suosikki",
    "text file extensions": "tekstitiedosto laajennukset",
    "to": "vastaanottaja",
    "unstarred": "ei suosikki",
    "you can also press \u2190 ": "voit painaa my\u00f6s \u2190 ",
    "{placeholder} Folder Permission": "{placeholder} Kansion oikeus"
  };
  for (var key in newcatalog) {
    django.catalog[key] = newcatalog[key];
  }
  

  if (!django.jsi18n_initialized) {
    django.gettext = function(msgid) {
      var value = django.catalog[msgid];
      if (typeof(value) == 'undefined') {
        return msgid;
      } else {
        return (typeof(value) == 'string') ? value : value[0];
      }
    };

    django.ngettext = function(singular, plural, count) {
      var value = django.catalog[singular];
      if (typeof(value) == 'undefined') {
        return (count == 1) ? singular : plural;
      } else {
        return value.constructor === Array ? value[django.pluralidx(count)] : value;
      }
    };

    django.gettext_noop = function(msgid) { return msgid; };

    django.pgettext = function(context, msgid) {
      var value = django.gettext(context + '\x04' + msgid);
      if (value.indexOf('\x04') != -1) {
        value = msgid;
      }
      return value;
    };

    django.npgettext = function(context, singular, plural, count) {
      var value = django.ngettext(context + '\x04' + singular, context + '\x04' + plural, count);
      if (value.indexOf('\x04') != -1) {
        value = django.ngettext(singular, plural, count);
      }
      return value;
    };

    django.interpolate = function(fmt, obj, named) {
      if (named) {
        return fmt.replace(/%\(\w+\)s/g, function(match){return String(obj[match.slice(2,-2)])});
      } else {
        return fmt.replace(/%s/g, function(match){return String(obj.shift())});
      }
    };


    /* formatting library */

    django.formats = {
    "DATETIME_FORMAT": "j. E Y \\k\\e\\l\\l\\o G.i",
    "DATETIME_INPUT_FORMATS": [
      "%d.%m.%Y %H.%M.%S",
      "%d.%m.%Y %H.%M.%S.%f",
      "%d.%m.%Y %H.%M",
      "%d.%m.%Y",
      "%d.%m.%y %H.%M.%S",
      "%d.%m.%y %H.%M.%S.%f",
      "%d.%m.%y %H.%M",
      "%d.%m.%y",
      "%Y-%m-%d %H:%M:%S",
      "%Y-%m-%d %H:%M:%S.%f",
      "%Y-%m-%d %H:%M",
      "%Y-%m-%d"
    ],
    "DATE_FORMAT": "j. E Y",
    "DATE_INPUT_FORMATS": [
      "%d.%m.%Y",
      "%d.%m.%y",
      "%Y-%m-%d"
    ],
    "DECIMAL_SEPARATOR": ",",
    "FIRST_DAY_OF_WEEK": 1,
    "MONTH_DAY_FORMAT": "j. F",
    "NUMBER_GROUPING": 3,
    "SHORT_DATETIME_FORMAT": "j.n.Y G.i",
    "SHORT_DATE_FORMAT": "j.n.Y",
    "THOUSAND_SEPARATOR": "\u00a0",
    "TIME_FORMAT": "G.i",
    "TIME_INPUT_FORMATS": [
      "%H.%M.%S",
      "%H.%M.%S.%f",
      "%H.%M",
      "%H:%M:%S",
      "%H:%M:%S.%f",
      "%H:%M"
    ],
    "YEAR_MONTH_FORMAT": "F Y"
  };

    django.get_format = function(format_type) {
      var value = django.formats[format_type];
      if (typeof(value) == 'undefined') {
        return format_type;
      } else {
        return value;
      }
    };

    /* add to global namespace */
    globals.pluralidx = django.pluralidx;
    globals.gettext = django.gettext;
    globals.ngettext = django.ngettext;
    globals.gettext_noop = django.gettext_noop;
    globals.pgettext = django.pgettext;
    globals.npgettext = django.npgettext;
    globals.interpolate = django.interpolate;
    globals.get_format = django.get_format;

    django.jsi18n_initialized = true;
  }

}(this));

