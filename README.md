# KrustyBurgerPizza

Smá devdetails.

##Front-end: JS - React + scss er sett upp með webpack.

  Ég suggesta að fara eftir þessu til að setja upp front-end.
  https://reactjs.org/docs/thinking-in-react.html

  Síðan held ég að það gæti verið sniðugt að reyna að koma út úr okkur "snapshot" af bakendanum svo við getum skipt þægilega upp verkum n shit.

##Back-end: Java application með smá server.

  Hljómar flókið en er það ekki, það að tengja niðurstöðurnar við serverinn er mjög easy, við erum að tala um bókstaflega

  ```java
  String[] searchParam = "blablabla", "don't cara";
  SearchEngine search = new SearchEngine();
  Result[] results = search.getResults(searchParam);
  for(Result result : results) {
    //getters n shit --> variables
    //sem fara automatically yfir í JSON response
  }
  ```

##Hvernig maður setur upp shittið?
####Front-end:
  0. Ná í git folder.
  1. npm install
  2. npm run build
  3. npm run dev

####Back-end:
  0. Ná í git folder (sama folder samt).
  1. Vera aware að þessi síða er til ----> https://spring.io/guides/gs/rest-service/
  2. Installa gradle (nota google ef maður er ekki viss hvernig, ekki erfitt skref)
  3. cd --> ./server/initial
  4. ./gradlew bootRun

  Sidenote:
  Hvering hefur þetta áhrif á development?
  Eins lengi og leitarvélin er separate module sem maður getur importað.

  Kóðin sem gradle generate-ar er weird líka, en til þess að develop-a þá getur maður fundið hann í ./server/initial/src/main/java/hello , þar sem entrypoint er "Application.java"
