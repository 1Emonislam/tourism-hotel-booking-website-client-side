import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import AddaNewBooking from './components/AddaNewBooking/AddaNewBooking';
import Booking from './components/Booking/Booking';
import BookingOrderPlace from './components/BookingOrderPlace/BookingOrderPlace';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import ManageAllOrders from './components/ManageAllOrders/ManageAllOrders';
import MyOrders from './components/MyOrders/MyOrders';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Login from './components/Register/Login';
import Register from './components/Register/Register';
import SingleBookingService from './components/SignleBookingService/SingleBookingService';
import AuthProvider from './contexts/AuthProvider';
import NotFounds from './NotFounds/NotFounds';
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Header></Header>
              <Home></Home>
            </Route>
            <Route path="/home">
              <Header></Header>
              <Home></Home>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/booking-services/:id">
              <Header></Header>
              <SingleBookingService></SingleBookingService>
            </PrivateRoute>
            <PrivateRoute path="/booking-order-place/:id">
              <Header></Header>
              <BookingOrderPlace></BookingOrderPlace>
            </PrivateRoute>
            <PrivateRoute path="/add-a-new-booking">
              <Header></Header>
              <AddaNewBooking></AddaNewBooking>
            </PrivateRoute>
            <PrivateRoute path="/manage-all-orders">
              <Header></Header>
              <ManageAllOrders></ManageAllOrders>
            </PrivateRoute>
            <PrivateRoute path="/my-orders">
              <Header></Header>
              <MyOrders></MyOrders>
            </PrivateRoute>
            <PrivateRoute path="/booking">
              <Header></Header>
              <Booking></Booking>
            </PrivateRoute>
            <Route exact path="*">
              <Header></Header>
              <NotFounds></NotFounds>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
