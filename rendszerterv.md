# Rendszerterv

## 1. Bevezetés, célkitűzés
A rendszer célja egy olyan webes kvíz alkalmazás megvalósítása, amely szórakoztató formában biztosít lehetőséget a felhasználóknak különböző témakörökben való játékra.  
A fő témakörök: **matematika, történelem, informatika, mesterséges intelligencia**.  

A rendszer elsődleges feladata, hogy a felhasználók egyszerűen tudjanak regisztrálni, bejelentkezni és kvízeket kitölteni.  
A játék során a kérdések csak előre meghatározott válaszlehetőségekkel válaszolhatók meg, ezzel csökkentve a hibás bevitel lehetőségét.  

A célkitűzés, hogy egy **reszponzív, bővíthető és felhasználóbarát webes kvíz-portál** jöjjön létre.

---

## 2. Követelmények összegzése

### 2.1 Megrendelői követelmények
- A weboldal legyen **reszponzív**.  
- A rendszer kódja legyen **bővíthető**.  
- Vendégek számára is elérhető legyen a **TOP 10 lista**.  
- **3 héten belül demó verzió** készüljön el.  

### 2.2 Fix üzleti igények
- Szint-rendszer (előnyök feloldása).  
- Saját profil szerkesztése.  
- Regisztráció/Bejelentkezés.  
- Elfelejtett jelszó funkció.  

### 2.3 Funkcionális követelmények
- Kérdésbank kezelése.  
- Kvíz indítása.  
- Eredmények eltárolása.  
- Pontszámítás és toplista.  
- Reszponzív UI.  

### 2.4 Nem funkcionális követelmények
- Gyors reakcióidő.  
- Biztonságos jelszókezelés.  
- Bővíthetőség új témakörökkel.  

---

## 3. Funkcionális terv

### 3.1 Felhasználói szerepkörök
- Vendég  
- Regisztrált felhasználó  
- Adminisztrátor  

### 3.2 Modulok
1. **Felhasználókezelés** (regisztráció, belépés, profil szerkesztés)  
2. **Kvíz modul** (témaválasztás, kérdések, pontozás)  
3. **Eredménykezelés** (toplista, statisztikák)  
4. **Admin modul** (kérdésbank kezelése – későbbi verzióban)  


## Követelmények:
## Követelmény lista:
| Követelmény | Modul | Név | Leírás |
| :---:       | ---   | --- | :---   |
| Követelmény 1 | Felület | Játékosnév megadása | A felhasználó legelőször ezt lássa amikor megérkezik a weboldalra. Miután megadta a játékosnevét kezdőthet a game |
| Követelmény 2 | Felület | Témakörök | A felhaasználó ebben a modulban már ki tudja választani, hogy milyen téma körben szeretne játszani. Az alábbi téma körökből választhat: Mesterséges intelligencia, informatika, matematika, történelem, irodalom. |
| Követelmény 3 | Felület | Játék megkezdése | Miután a felhasználó kiválasztotta a témakört következő lépésben egy pulzáló start-gomb jelenik meg neki, alatta a játékmenet leírásával. |
| Követelmény 3 | Felület | Játék menete | Miután a felhasználó megnyomta a start-gombot és a játék megkezdődött: minden témakörben egy kérdés kiválasztására legyen 7 másodperc.|
| Követelmény 4| Felület | Játék nyomon követése | A játék menete közben a játékos meg tudja tekinte hogy a 10 kérdésből éppen mennyinél tart, illetve hogy a 7 másodpercből még mennyi van hátra. A két számláló egymás mellett helyezkedjen el. |
| Követelmény 5 | Felület | Pontszámok | Ha a játékos nem választott akkor az adott körnél az idő elteltével a pontszám nem kerül bele az adott játékba. |
| Követelmény 6 | Felület | Játék vége | Miután a játék véget ért írja ki a játékos pontszámát és idejét. Majd alá egy gombot amivel el tudja fogadni az elért eredményt. |
|Követelmény 7 | Felület | Főoldal | A felhasználó itt már több opció közül is tud választani: Eredmények, Játék, Bejelentkezés, Regisztráció.|
