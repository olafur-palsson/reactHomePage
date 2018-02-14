# KrustyBurgerPizza

Smá devdetails.

Front-end: JS - React + scss er sett upp með webpack.

  Ég suggesta að fara eftir þessu til að setja upp front-end.
  https://reactjs.org/docs/thinking-in-react.html

  Síðan held ég að það gæti verið sniðugt að reyna að koma út úr okkur "snapshot" af bakendanum svo við getum skipt þægilega upp verkum n shit.

Back-end: Java application með smá server.

  Hljómar flókið en er það ekki, það að tengja niðurstöðurnar við serverinn er mjög easy, við erum að tala um bókstaflega

  ```java
  String[] searchParam = "blablabla", "don't cara";
  SearchEngine search = new SearchEngine();
  Result[] results = search.getResults(searchParam);
  for(Result result : results) {
    //getters n shit --> variables
    //sem fara automatically yfir í JSON response
  }
