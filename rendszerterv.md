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
---
