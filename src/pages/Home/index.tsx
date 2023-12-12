import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import { TextL, TextM, TitleL, TitleXL } from "../../styles/themes/textStyle";
import { BannerContainer, Heading, BannerInfo, BannerTitle, CoffeeMenu, Menu } from "./styles";
import CaffeImageBanner from "../../assets/CaffeImageBanner.svg"
import CoffeeSvg from "../../assets/CoffeeSvg.svg"

export function Home() {
    return(
        <div>
            <BannerContainer>
                <Heading>
                    <BannerTitle>
                        <div>
                            <TitleXL>Encontre o café perfeito para qualquer hora do dia</TitleXL>
                        </div>
                        <div>
                            <TextL>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</TextL> 
                        </div>
                    </BannerTitle>
                    <BannerInfo>
                        <div>
                            <ShoppingCart weight="fill"/>
                            <TextM>Compra simples e segura</TextM>
                        </div>
                        <div>
                            <Package weight="fill"/>
                            <TextM>Embalagem mantém o café intacto</TextM>
                        </div>
                        <div>
                        <Timer weight="fill"/>
                            <TextM>Entrega rápida e rastreada</TextM>
                        </div>
                        <div>
                            <Coffee weight="fill"/>
                            <TextM>O café chega fresquinho até você</TextM>
                        </div>
                    </BannerInfo>
                </Heading>
                    <img src={CaffeImageBanner}></img>
            </BannerContainer>
            <TitleL>
                    Nossos cafés
            </TitleL>
            <Menu>
                <CoffeeMenu>
                    <img src={CoffeeSvg}></img>
                    Tag
                    Texto
                    Expresso Tradicional
                </CoffeeMenu>
                    
                <CoffeeMenu>
                    <img src={CoffeeSvg}></img>
                    Tag
                    Texto
                    Exoressi Crenisi
                </CoffeeMenu>
                    
                <CoffeeMenu> 
                    <img src={CoffeeSvg}></img>
                    Tag
                    Texto
                    Arabe
                </CoffeeMenu>
                    
                <CoffeeMenu>
                    <img src={CoffeeSvg}></img>
                    Tag
                    Texto
                    Expresso Americano
                </CoffeeMenu>

                <CoffeeMenu>
                    <img src={CoffeeSvg}></img>
                    Tag
                    Texto
                    Irlandes
                </CoffeeMenu>

                <CoffeeMenu>
                    <img src={CoffeeSvg}></img>
                    Tag
                    Texto
                    Expresso Gelado
                </CoffeeMenu>
            </Menu>
        </div>
    )
}