import HomeContainer from "../components/pages/home/HomeContainer";
import LoginContainer from "../components/pages/login/LoginContainer";

export const menuRoutes = [
  {
    id: "home",
    path: "/",
    Element: HomeContainer,
  },
  /*   {
    id: "products",
    path: "/category/:categoryName",
    Element: ProductsListContainer,
  },
  {
    id: "detail",
    path: "/productDetail/:id",
    Element: ProductDetailContainer,
  }, */
  {
    id: "login",
    path: "/login",
    Element: LoginContainer,
  },
  /* 
  {
    id: "checkout",
    path: "/checkout",
    Element: CheckoutContainer,
  },
  {
    id: "register",
    path: "/register",
    Element: RegisterContainer, 
  },*/
];
