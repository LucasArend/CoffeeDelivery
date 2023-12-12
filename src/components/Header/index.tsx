import { NavLink } from "react-router-dom";
import { HeaderContiner, CustomMapPin, CustomShoppingCart } from "./styles";
import Logo from "./../../assets/Logo.svg"

export function Header() {
  return(
    <HeaderContiner>
      <img src={Logo} alt="" />
      <nav>
        <div className="locarionDiv">
          <CustomMapPin weight="fill" size={22} />
          Cachoeira do Sul, RS
        </div>
        <NavLink to="/cart" title="Histórico">
          <div className="cartDiv">
            <CustomShoppingCart size={22} weight="fill"  />
          </div>
        </NavLink>
      </nav>
  </HeaderContiner>
  )
}

