#Könyvkereső

##Követelményanalízis

###1. Követelmények összegyűjtése

    - Funkcionális elvárások
        + Könyvkeresésre kérést lehet megadni
        + Korábbi kérések listáját meg lehet tekinteni
        + Korábbi kérés módosítása(könyv szerzőjének, címének, egyéb tulajdonságainak módosítása)
        + Korábbi kérés törlése
    
    - Nem funkcionális követelmények
        + Felhasználóbarát, ergonomikus elrendezés és kinézet
        + Gyors működés
        + Biztonságos működés: jelszavak tárolása, funkciókhoz való hozzáférés.

###3. Használatieset-modell
    - Szerepkörök:
        + Vendég: Kezdőoldalt megnézheti, regisztrálni tud
        + Felhasználó: A vendég szerepkörén túl kérést tud leadni, és leadott kéréseit meg tudja tekinteni
    
    - Használati eset diagram:
        ![Használati eset diagram](public/HasznEsD.png)
    
    - Folyamatok pontos menete:
        + keresés felvitele
        + könyv módosítása
        + könyv törlése
        
        Keresés felvitelének folyamata:
            ![Keresés felvitelének folyamata](public/folymeghat.jpg)


##Tervezés

###1. Architektúra terv
    - Komponensdiagram
    
    - Oldaltérkép
    
        + Publikus:
        
            - Főoldal
            - Bejelentkezés
        
        + Bejelentő
        
            - Főoldal
            - Bejelentkezés/Kijelentkezés
            - Kereséslista
                + új keresés
                + keresés módosítása

    - Végpontok

###2. Felhasználóifelület-modell
    - Oldalvázlatok

###3. Osztálymodell
    - Adatmodell
    - Adatbázisterv
    - Állapotdiagram

###4. Dinamikus működés