# Követelmény specifikáció

## 1. Rendszer áttekintése

A fejlesztendő rendszer egy **webes alkalmazás**, amely:
- lehetővé teszi a **felhasználók regisztrációját és bejelentkezését** tanár vagy diák szerepkörben,  
- támogatja a **kvízek létrehozását és kitöltését**,  
- biztosítja az **eredmények tárolását és megjelenítését**,  
- valamint az **adminisztrációs műveleteket** a tanárok számára.  

A rendszer három fő szereplőre épül:
1. **Tanár** – teljes körű hozzáférés a kurzusokhoz és diákokhoz  
2. **Diák** – kurzusokhoz csatlakozhat és kvízeket tölthet ki  
3. **Vendég** – regisztráció és bejelentkezés nélkül korlátozott hozzáféréssel rendelkezik

---

## 2. Követelmények

### 2.1 Megrendelői követelmények
- A weboldal legyen **reszponzív**, mobilon és asztali gépen is megfelelően jelenjen meg.  
- A kód legyen **bővíthető és karbantartható**.  
- **3 héten belül** készüljön el egy **demó verzió**.  
- Legyenek különböző **jogosultsági szintek** (tanár, diák, vendég).  

### 2.2 Fix üzleti igények
- Szint-rendszer: Tanár, Diák, Vendég.  
- Profil szerkesztés: profilkép beállítása, e-mail módosítása.  
- Regisztráció / Bejelentkezés funkció.  
- Elfelejtett jelszó helyreállítása.  
- Osztályzási lehetőségek a tanárok részére.  

### 2.3 Funkcionális követelmények
- **Kérdésbank kezelése:** Tanárok saját kvízeket hozhatnak létre és adhatnak hozzá a rendszerhez.  
- **Kvíz indítása:** Időkorlát beállításával.  
- **Eredmények tárolása:** A rendszer minden diáknál az utolsó eredményt rögzíti.  
- **Osztályozás:** A tanár az elért pontszám alapján értékelheti a diákokat.  
- **Reszponzív kezelőfelület:** Modern, letisztult megjelenéssel.  

### 2.4 Nem funkcionális követelmények
- **Gyors reakcióidő:** Az oldal működése gördülékeny legyen.  
- **Biztonságos jelszókezelés:** Erős jelszógenerálás és tárolás (pl. hash-elés).  
- **Skálázhatóság:** Lehetőség a későbbi bővítésre (pl. új tantárgyak, modulok).  

---

## 3 Funkcionális terv

### 3.1 Felhasználói szerepkörök
| Szerepkör | Leírás |
|------------|--------|
| **Tanár** | Teljes jogosultsággal rendelkezik: kurzusok létrehozása, diákok eredményeinek megtekintése, új kvízek létrehozása, kérdésbank kezelése. |
| **Diák** | Kurzusokhoz kód alapján csatlakozhat, kvízeket tölthet ki, és megtekintheti a saját legutolsó eredményét. |
| **Vendég** | Csak regisztrációra és bejelentkezésre jogosult, további funkciókat nem ér el. |

---

## 4. Modulok

| Modul neve | Leírás |
|-------------|--------|
| **Felhasználókezelés** | Regisztráció, bejelentkezés, profil szerkesztése, jelszó visszaállítása. |
| **Kvíz modul** | Kvízek kezelése, kitöltése, időkorlátos feladatmegoldás. |
| **Eredménykezelés** | Diákok legutolsó eredményének tárolása, statisztikák, toplisták megjelenítése. |
| **Admin modul** | Tanári kérdésbank, új kurzusok és kvízek létrehozása, diákok eredményeinek áttekintése. |

---

## 5. Részletes követelménylista

| Kód | Modul | Név | Leírás |
|:---:|---|---|---|
| **K1** | Felület | Kezdőlap | A főoldalon váltakozó GIF-ek jelennek meg, amelyek bemutatják a weboldal funkcióit. |
| **K2** | Felület | Regisztráció | A főoldalról érhető el. A felhasználó tanárként vagy diákként regisztrálhat. Tanárként meg kell adni a „zöld-erdő” kódot. |
| **K3** | Felület | Bejelentkezés | A felhasználó kiválaszthatja, hogy tanár vagy diák, majd e-mail és jelszó megadásával beléphet. |
| **K4** | Tanár | Dashboard | A tanár láthatja az általa létrehozott kurzusokat és a hozzájuk tartozó diákok számát. |
| **K5** | Tanár | Create Classroom | Új kurzus létrehozása név és belépési jogosultság beállításával. |
| **K6** | Tanár | Classroom | Egy adott kurzus részletes megtekintése, diákok kezelése, új kvízek hozzáadása. |
| **K7** | Diák | Dashboard | A diák láthatja, milyen kurzusokhoz csatlakozott, és új kurzusba is beléphet kóddal. |
| **K8** | Diák | Classroom | A kurzushoz tartozó kvízek listája és a saját legutóbbi pontszámok megjelenítése. |
| **K9** | Diák | Kvíz | Kérdések és válaszlehetőségek megjelenítése, navigáció a kérdések között. |
| **K10** | Tanár | Create Kvíz | A tanár kvízeket hozhat létre, kérdéseket adhat hozzá, és meghatározhatja a helyes válaszokat, pontszámokat. |

---

## 6. Tesztelési követelmények

- Regisztráció és bejelentkezés validálása.  
- Kvízek működésének és eredménymentésének ellenőrzése.  
- Jogosultsági szintek helyes működése.  
- Felhasználói felület reszponzivitásának ellenőrzése.  

---

## 7. Összefoglalás

A dokumentumban meghatározott követelmények alapján egy **tanár–diák interakcióra és kvíz alapú tudásmérésre épülő webes rendszer** kerül fejlesztésre.  
A rendszer célja az oktatási folyamat támogatása, a diákok fejlődésének mérése, valamint a tanárok adminisztrációs munkájának egyszerűsítése.  
