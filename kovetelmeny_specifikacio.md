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

#Fix üzleti igények:
+ Szint-rendszer: Bizonyos elért eredmények felett, a felhasználónak legyen lehetősége egy kérdést skippelni, vagy idő hosszabbítást kérni.
+ Saját profil: Legyen lehetőség szerkeszteni a saját profilt: játékosnév beállítása, e-mail cím változtatása, profil törlése
+ Regisztráció/Bejelentkezés: A teljes verzióban legyen lehetőség arra, hogy be tudjunk jelentkezni e-mail/felhasználó név + jelszóval
+ Elfelejtett jelszó: A felhasználó elfelejtett jelszó esetén tudjon kérni egy új jelszó igénylést. (Ennek körülményei még nincsenek tisztázva)
