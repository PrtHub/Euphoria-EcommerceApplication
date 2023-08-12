import { useLocation } from "react-router-dom";



const Billing = () => {
    const location = useLocation();
    const cartProducts = location.state?.products || [];

    console.log(cartProducts)

  return (
    <div>Billing</div>
  )
}

export default Billing