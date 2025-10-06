# Funkcionális specifikáció

## 1. Bevezetés

A dokumentum célja, hogy bemutassa a fejlesztendő webes oktatási rendszer funkcionális működését.  
A rendszer célja, hogy a tanárok nyomon tudják követni a diákok aktivitását és fejlődését különböző tantárgyakban, valamint lehetőséget biztosítson kvízek létrehozására és kitöltésére.  

A rendszer három szerepkörre épül:
- **Tanár**
- **Diák**
- **Vendég**

---

## 2. Rendszer áttekintése

A rendszer egy **reszponzív webes alkalmazás**, amely:
- biztosítja a felhasználók **regisztrációját és bejelentkezését**,
- lehetőséget ad **tanároknak kurzusok és kvízek kezelésére**,
- lehetőséget ad **diákoknak kurzusokhoz csatlakozni és kvízeket kitölteni**,
- **tárolja az eredményeket**, és azokat elérhetővé teszi a tanárok számára.

A rendszer a frontenden JavaScript alapú dinamikus felülettel rendelkezik, a háttérben adatbázis kezeli a felhasználói, kurzus- és kvízadatokat.

---

## 3. Felhasználói szerepkörök és jogosultságok

| Szerepkör | Leírás | Jogosultságok |
|------------|--------|----------------|
| **Tanár** | Kurzusok létrehozása és kezelése, diákok nyomon követése | Kurzus létrehozás, kvíz létrehozás, eredmények megtekintése |
| **Diák** | Kurzusokhoz való csatlakozás és kvízek kitöltése | Kvízek kitöltése, saját eredmények megtekintése |
| **Vendég** | Regisztráció és bejelentkezés nélkül csak információkat láthat | Regisztráció, bejelentkezés |

---

## 4. Fő funkciók áttekintése

### 4.1 Regisztráció és bejelentkezés
- A felhasználó megadhatja, hogy tanárként vagy diákként kíván regisztrálni.  
- Tanár regisztrációhoz szükséges egy **tanári kód** („zöld-erdő”).  
- Bejelentkezés után a rendszer a felhasználót szerepkörének megfelelő kezdőoldalra irányítja.

### 4.2 Kurzuskezelés
- A tanár **kurzusokat hozhat létre**, megadhatja azok nevét és beállíthatja, hogy a diákok automatikusan vagy engedéllyel csatlakozhatnak.  
- A kurzushoz generált **egyedi kód** alapján a diákok csatlakozhatnak.  
- A tanár megtekintheti a kurzushoz tartozó diákokat és eredményeiket.

### 4.3 Kvízkezelés
- A tanár létrehozhat új kvízeket a kurzusaihoz.  
- A kvízhez megadható a kérdések listája, válaszlehetőségek és pontértékek.  
- A diákok a kurzuson belül kitölthetik a kvízeket, a rendszer az utolsó eredményt eltárolja.

### 4.4 Eredménykezelés
- A rendszer a diák legutolsó eredményét tárolja minden kvízhez.  
- A tanár megtekintheti az eredményeket, statisztikát készíthet, és értékelheti a diákokat.  
- A diák csak a saját eredményeit látja.

### 4.5 Profilkezelés
- A felhasználók módosíthatják e-mail címüket, profilképüket és jelszavukat.  
- Biztonságos jelszókezelés (hash-elt jelszavak).  
- Elfelejtett jelszó esetén e-mail alapú helyreállítás.

---

## 5. Folyamatleírások (magas szintű)

### 5.1 Bejelentkezési folyamat
1. A felhasználó megadja e-mail címét és jelszavát.  
2. A rendszer ellenőrzi az adatokat az adatbázisban.  
3. Siker esetén a felhasználó a saját szerepkörének megfelelő irányítópultra kerül.  

### 5.2 Kvízkitöltés folyamata
1. A diák belép egy kurzusba.  
2. Kiválasztja a kitölteni kívánt kvízt.  
3. A rendszer megjeleníti a kérdéseket és válaszokat.  
4. A diák kitölti a kvízt, majd elküldi.  
5. Az eredményt a rendszer elmenti és megjeleníti a felhasználónak.

### 5.3 Tanári kurzus létrehozás folyamata
1. A tanár bejelentkezik.  
2. Új kurzust hoz létre név megadásával.  
3. A rendszer generál egy kurzus-kódot.  
4. A tanár meghatározza, hogy a diákok automatikusan vagy jóváhagyással léphetnek be.  

---

## 6. Nem funkcionális elvárások

| Kategória | Követelmény |
|------------|-------------|
| Teljesítmény | A rendszer válaszideje maximum 2 másodperc minden alapvető műveletnél. |
| Biztonság | Jelszavak hash-elve tárolva, HTTPS kommunikáció. |
| Skálázhatóság | Új kurzusok, kvízek és felhasználók könnyen bővíthetők. |
| Használhatóság | Letisztult, reszponzív felhasználói felület. |

---

## 7. Tesztelési pontok

- Regisztrációs folyamat validálása.  
- Bejelentkezés különböző szerepkörökkel.  
- Kvíz létrehozás és kitöltés.  
- Eredmények helyes mentése és megjelenítése.  
- Profilmódosítás és jelszókezelés ellenőrzése.

## 8. Képernyőtervek:

| Kép | Leírás |
| --- | ------ |
| <img width="1202" height="715" alt="image" src="https://github.com/user-attachments/assets/1139163a-1567-49d7-9889-71b131f17daf" /> | A főoldalon GIF-ek váltakozzanak, amik mutatják, hogy hogy néz ki valójában a weboldal egy-egy funkciója.| 
| <img width="1249" height="694" alt="image" src="https://github.com/user-attachments/assets/af9bf435-62ce-47db-bc26-9c3dc69c6f74" /> | A főoldalról ide navigálva tudnak regisztrálni a felhasználók. Itt ki lehet választani, hogy Tanár vagy diákként szeretnénk regisztrálni. Ha tanárként, akkor tudnunk kell a tanári kódot (zöld-erdő), amit a regisztrációkor meg kell adniuk, különben a regisztráció sikertelennek minősül. |
| <img width="1230" height="699" alt="image" src="https://github.com/user-attachments/assets/35ad19fa-1ac2-4a4b-8539-886beb103d25" /> | A főoldalről át tudjunk lépni a bejelentkezés oldalra, ahol kiválasztjuk azt az opciót egy kapcsolóval, hogy tanárok, vagy diákok vagyunk-e. A funkció kiválasztása után a felhasználók egy e-mail cím/egyedi felhasználó név és egy jelszó megadásával tudnak belépni az oldalra. |
| <img width="1200" height="696" alt="image" src="https://github.com/user-attachments/assets/1b40ba17-3d80-470d-a996-18d0d2bd359f" /> | Ezen az oldalon meg tudjuk tekinteni, hogy milyen kurzusokat hoztunk létre és azokon a kurzusokon mennyi diák van, új kurzust a jobb felső sarokban tudunk csinálni. |
| <img width="1187" height="664" alt="image" src="https://github.com/user-attachments/assets/a18f3b18-40ae-48b6-9416-2876a0f3bb42" /> | Ebben a menüpontban a következőket kell meghatározni: kurzus név, el kell fogadni a tanárnak a belépést vagy sem |
| <img width="1216" height="678" alt="image" src="https://github.com/user-attachments/assets/29e764f4-bc2a-43f3-92d6-9377b0baff93" /> | Ezen az oldalon egy adott kurzusnak a részleteit tudjuk admin szemszögből megtekinteni, a bal felső sarokban a kurzus-kód, valamint a kurzus név foglal helyet. Fent középen a jelentkezéseket lehet elfogadni (ha úgy állítottuk be a jogosultságot). A jobb felső sarokban pedig az alap kvízeken kívül újakat tudunk készíteni. Az oldal közepén pedig a kvízek neve mellettük pedig a kitöltések száma fog megjelenni.|
| <img width="1221" height="697" alt="image" src="https://github.com/user-attachments/assets/62eadea3-4572-4a72-8213-b5d84240a113" /> | A jobb felső sarokban tudunk új classroom-ba jelentkezni ami egy másik oldalra fog át irányítani, ezen felül az oldal közepén a már felvett kurzusokat láthatjuk mellette az ott lévő diákok számával. |
| <img width="1172" height="688" alt="image" src="https://github.com/user-attachments/assets/58a65e0f-b845-4d79-8a70-bd28de7d11d5" /> | A bal felső sarokban a kurzus-kódot tudjuk megtekinteni a felső sávban középne a kurzus-nevét tudjuk megtekinteni alatta pedig, a kvízek nevét tudjuk megtekinteni mellette pedig az ott elért legutolsó pontszámunkat |
| <img width="1223" height="699" alt="image" src="https://github.com/user-attachments/assets/759045dd-c9c2-4003-b7ae-f7d789b69279" /> | Bal felső sarokban a kurzus kódot láthatjuk, fent középen pedig a felvett kurzus nevét. Az oldal közepén egy szöveg dobozban fog elhelyezkedni a 4 válasz a tetején egy kérdéssel. Az oldal alján lehet lépkedni a kérdések között. |
| <img width="655" height="905" alt="image" src="https://github.com/user-attachments/assets/d444d014-6ac9-4e95-a5c5-6c9c9354c48e" />  | Bal felső sarokban tudjuk megadni a kvíz nevét. A jobb felső sarokban pedig ha minden tenni valónkkal elkészültünk, akkor le tudjuk generáltatni a kvízt. Ez alatt a gomb alatt pedig el tudjuk dönteni hogy akarjuk-e engedélyezni a vissza lépést vagy sem. Ez alatt pedig a már elkészített kérdéseket tudjuk megtekinteni. Ezután egy nagy plusz gomb segítségével tudunk hozzáadni egy újabb kérdést a kvízünkhöz. Ott meg kell határozni a maximum elérhető pontot a kérdés címét a válaszokat, és hogy azok közül melyik a helyes válasz. |




---

## 9. Összefoglalás

A rendszer alapvető célja, hogy egy interaktív, oktatást támogató webes platformot biztosítson tanárok és diákok számára.  
A funkcionális működés lehetővé teszi a kurzusok és kvízek kezelését, az eredmények tárolását és a felhasználók közti szerepköralapú interakciót.  
A fejlesztés során a rugalmasság, biztonság és felhasználóbarát kialakítás élvez elsőbbséget.
