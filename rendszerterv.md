# Rendszerterv

## 1. Bevezetés, célkitűzés
A rendszer célja, hogy egy olyan weboldal jöjjön létre melyben a tanárok nyomon tudják követni diákjaik aktivitását és fejlődését
az alábbi téma körökben: Mesterséges intelligencia, informatika, matematika, történelem, irodalom. 
A végleges verzióban az a cél, hogy a diákok tudjanak csatlakozni a különböző szobákhoz. A diákok a különböző szobákban korlátlanul hozzáférhetnek a 
kvízekhez ahol a legutolsó eredményüket tárolja el. A tanárok admin jogosultsággal rendelkeznek, hozzáférnek az összes szobához, ahol fix-kódokkal tudják 
segíteni a diákok csatlakozását a szobákhoz.

---

## 2. Követelmények összegzése

### 2.1 Megrendelői követelmények
- A weboldal legyen **reszponzív**.  
- A rendszer kódja legyen **bővíthető**.    
- **3 héten belül demó verzió** készüljön el.
- Legyenek különböző jogosultsági szintek: tanár, diák, még nem bejelentkezett felhasználók.  

### 2.2 Fix üzleti igények
- Szint-rendszer: Tanár, diák, még nem belentkezett felhasználó 
- Saját profil szerkesztése: profilkép beállítása, e-mail cím módosítása
- Regisztráció/Bejelentkezés.  
- Elfelejtett jelszó funkció.
- Osztályzási lehetőségek

### 2.3 Funkcionális követelmények
- Kérdésbank kezelése. A tanár is tudjon hozzáadni az adott témakörhöz saját kezűleg kéeszített kvízeket.  
- Kvíz indítása, idő korlát beállítása
- Legutolsó eredmények eltárolása.  
- Lehetőség az elért eredmények alapján osztályozni a diákokat
- Reszponzív UI.

### 2.4 Nem funkcionális követelmények
- Gyors reakcióidő, de a beállítások között lehessen módosítani 
- Biztonságos jelszókezelés: erős rendszer által generált jelszavak használata
---

## 3. Funkcionális terv

### 3.1 Felhasználói szerepkörök
- Tanár: minden jogosultsággal rendelkezik: külön csoport létrehozása, csoportok közötti lépkedés, ha belép egy csoportba akkor lássa a felhasználókat és az elért eredményeiket
- Diák: be tud lépni egy csoportba egy adott kóddal, az adott csoportokon belül meg szabadon tudjon kvízezni, ** csak a legújabb és saját eredményét látja **
- Vendég: nincsen jogsultsága, csak regisztrálni és bejelentkezni tud

### 3.2 Modulok
1. **Felhasználókezelés** (regisztráció, belépés, profil szerkesztés)  
2. **Kvíz modul** (témaválasztás, kérdések, pontozás)  
3. **Eredménykezelés** (toplista, statisztikák)  
4. **Admin modul** (kérdésbank kezelése – későbbi verzióban)  


## Követelmény lista:
| Követelmény | Modul | Név | Leírás |
| :---:       | ---   | --- | :---   |
| K1 | Felület | Főoldal | A főoldalon GIF-ek váltakozzanak, amik mutatják, hogy hogy néz ki valójában a weboldal egy-egy funkciója. |
| K2 | Felület | Regisztráció | A főoldalról ide navigálva tudnak regisztrálni a felhasználók. Itt ki lehet választani, hogy Tanár vagy diákként szeretnénk regisztrálni. Ha tanárként, akkor tudnunk kell a tanári kódot (zöld-erdő), amit a regisztrációkor meg kell adniuk, különben a regisztráció sikertelennek minősül. |
| K3 | Felület | Bejelentkezés | A főoldalről át tudjunk lépni a bejelentkezés oldalra, ahol kiválasztjuk azt az opciót egy kapcsolóval, hogy tanárok, vagy diákok vagyunk-e. A funkció kiválasztása után a felhasználók egy e-mail cím/egyedi felhasználó név és egy jelszó megadásával tudnak belépni az oldalra. |
