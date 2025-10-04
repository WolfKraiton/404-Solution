# Követelmény specifikáció

## Áttekintés:
A webes alkalmazásunk célja, hogy a felhasználó különböző témakörökben tudjon magának vicceket választani.
Ezek a témakörök: matematika; történelem; informatika; AI-al kapcsolatos kérdések.
Az egyes témakörökön belül, a válaszok módja elég eltérő lesz lehet évszám, vagy éppen fogalom akár egy szó kiválasztása.
Az viszont fontos, hogy a kvíz közben válaszként a program csak kiválasztási lehetőségeket fog elfogadni.

## A jelenlegi helyzet:
Valiskó Zsolt mint kiemelt közszereplő és Balla Benedek a Karinthy-gyűrű várományosa kérvényezték egy kvíz-portál már már egy túlfejlesztett
honfoglaló játék elkészítésést a csizmi-Kft.-nél.
Az alkalmazás fejlesztése alatt még csak az alap funkciók lesznek elérhetőek, mint például a témakörök kiválasztasása, az éppen aktuális eredmények eltárolása.

## Megrendelői követelmények:
A weboldal legyen teljesen reszponzív. Fontos, hogy a kód felépítése tartalmazzon olyan elemeket,
amely lehetővé teszi a későbbi fejlesztéseket rajta. Például legyen lehetőség csak meglátogatni a weboldalt
külső felhasználók számára, számukra pedig legyen látható hogy kik a TOP 10 felhasználó azaz, az elmúllt időszakban
kik érték el a legmagasabb eredményeket. >> Ezzel is arra buzdítva a látogatót, hogy regisztráljon be majd pedig Ő is 
legyen aktív felhasználó.

## Jelenlegi üzleti folyamatok:
Jelenleg még tárgyalások zajlanak a megrendelőkkel, hogy teljesen tisztázni tudjuk az igényeit, hogy a következő 3 hétre működőképes demo
verziót tudjunk bemutatni a számukra.

## Fix üzleti igények:
+ Szint-rendszer: Bizonyos elért eredmények felett, a felhasználónak legyen lehetősége egy kérdést skippelni, vagy idő hosszabbítást kérni.
+ Saját profil: Legyen lehetőség szerkeszteni a saját profilt: játékosnév beállítása, e-mail cím változtatása, profil törlése
+ Regisztráció/Bejelentkezés: A teljes verzióban legyen lehetőség arra, hogy be tudjunk jelentkezni e-mail/felhasználó név + jelszóval
+ Elfelejtett jelszó: A felhasználó elfelejtett jelszó esetén tudjon kérni egy új jelszó igénylést. (Ennek körülményei még nincsenek tisztázva)

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
  
