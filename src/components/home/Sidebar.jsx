import React from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css'

const Sidebar = () => {
    return (
<<<<<<< HEAD
        <nav className="navigation scroll-bar hov-none">
            <div className="container ps-0 pe-0">
                <div className="nav-content">
                    <div className="nav-wrap bg-transparent-card pb-1 mb-2 mt-2">
                        <ul className="mb-1 top-content list-unstyled">
                            <li>
                                <Link to="/user-page" className="nav-content-bttn open-font d-flex align-items-center">
                                    <img src="https://lzycrazyserver.lzycrazy.com/public/ProfileImage/1693471659_defaultimage.jpg-5" alt="user" className="w35 me-2 circle-img" />
                                    <span>Arvind Bhandari</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/market-Place/marketSidebar" className="nav-content-bttn open-font d-flex align-items-center">
                                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAYAAAA6RwvCAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAQ5SURBVHgBzVhBbNtUGP6e7SRNYrehS5O2StUciop6AA5FXJBA2jSBhEYRQoxT4YjYjQu3cURIIE6cJziNC6ehXSZVaAImcQBVMAYRFJGqTUhaJ3HiOHZs3u/EXbfZiZMmiE968vPv3//7/b/3vvf/ZhgNoizL52zbFoMUHMcRJUnSGxz8toOQkELqyYlEQhEEobu4uFgrFArGIOW1tbUYvyiWZcV1XVd5X8MZEZ2ZmVlNp9MKxoSiKOfi8XiObGEc8CnI8CgsYULIZDJZsjnSS/TCWaIQhBRHaGdIcWlpKYEpgWwPdYYUyGtMGRTtQc5ER57DszmzjFMLmHkdWtl8qxX9XrK+vfQlY+x1jAinUQMqJRrluvTm3csPP+fBz6uqukd9oS+TiYQCLe7pCfzFHx9FgLkngVne6J6amO/JhNX7MrqnZiwAZe7QIYv7meVjVh/YFP197v9VW0/kra0Nh1r31lcOwb73o+PJ7N07rsy5fcP2ZE6xYJOoe+NzT6/mXFpf9rPvUQRFJDooGjaEq24nOgP27Pme8J/D+wrxZM/hlcdPptm5t+v2hee34MTcYMzaoviun31ia34RBc58SjabDaRgddd5rX5XsLS5Z9AWJPB1hMatH1D7TXKbLiZdmW4KJ7LG7Z97Mq5ft9dQ+1VE7Sd728++pmkqnV8SnQf87KgGOWKUHZMvV0U4diBYlivrHJsw/+6dZ5LeAeNy27Bg9GV2E66M0EYKbN+kXRFEkB06RMVoNJo0TTMwIu/NLJjs6Y119v47KSGTptMVVj4H55ffwd54Gez8c2B8FCuZgG3ywecUsCvbEFOzqNc1/NG1kSjsqZKqXv3YqN7xGyMSiSiMFkur1TrAAByUytcExrYxIiqVYxT3D8j5ay9efOHtID3yIWwagJvNJr7mLa5ZYLaDKysL+L5j4Bvdf52TXqdt4IIDLIewH9qRXcPA9XoD8pEB0XLw6kIK3xm6K/ODp7fBM5Nlcbh9Af8ThI6IBzki4ZXFeUwaI0dE4zvjZqmKScLNc/vMRqdg6ERXNXsc8VIyiVwk4qsjxi3ozRZWW00aapA5l9klzmxVYjZ+LWNEXOCOUPPFY/3tqzf5Fwfb8JjdPRMGcclHH372RTabvlgUWeZPswuBN5vz5FPJGNLC4JntmB3oLQP7+4d7zWZr55NPP3iES7z0Q+o7olG5UKlUHtmLnDUvl8sVieZu/ZS8zVONIoaj2+2ioTXzvPsWbw84Qhl+LBar6ae5iMoG/MeYn59f8fonsc3lcoeTLB+GgdJS7kg58OE0yoiHQQk61TkDlUhhmuUERzx0kk7OTKmskMeq9iZZXtD6GzodQaCqnvY5bTOMD5nKhv4fgkAwhAAtYJ7OpXgm1wr534OKtRSlgMRRfvw0liMe6KtKpZLMU7tEu922gvTo/Nrc3Dza2dmxwtr+F3U4yJV5bXs1AAAAAElFTkSuQmCC" alt="Market" className="me-2" />
                                    <span>Market</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/my-ads" className="nav-content-bttn open-font d-flex align-items-center">
                                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAYAAAA6RwvCAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAARjSURBVHgBtVhfaFtlFD/fvTdpbpq4S1vSP0SadnFFqrLVjo1ujMyOWgUxPsgQQSnIEHxQRNT5Igo6XxXUF1/0Yb74UDpkEKNNmczZTQY+iEhLyszapWuTtPlzk5t77+c5pSk1NMm9yfKDcE++73xffjnnO+c75zKwB9Hj8XSbpinWUuCci5IkqVkEftXAIiSLeh632+0VBMHo6+vbWlpaKtVTDgaDHfjw6rouq6qaQTkHLcLpcrkGe3p6vNAkvF5vtyzLftoLmgG6wIdW6IcHBJ/P10t72lpEC1qxQi0oCMtkSLG/v98NbQLt3ZAMKRBraDPI2vXIOG37sA7mQyGpAZkB2HeAWUWgk42hloAWkX7+6VcEED9HUVF189ZavvjisVhs5SBdNH4gk8nszFUSkweJcE3TVGgB6fB0QODCvPnoYzIGPpjOjgEtv3X076HDN+Px+P1qffSAgZHZUSgUNIEGkISCiXATmsDU1NQQfsIkM85O8B4f0yfOgHH4ETAH0PqMnXA4HIXp6elA9dqNjY0skvCQTESclJKhSQSPHDnPGPs2FAoppiHeBbUAjoWfQc9uQZ4JwAGWSQ+vhfsHradsjQ9RxMyn9Pb25lKplAE2sZZWA2PHT3594/q1bq1U0i5cvfrdjH+A5dfvhXL/3gF9NZGRTP7yW5Hon8vLy+WD9sDjUEYXdQl0HzS6O2qRYCKLPXTokH9y6hmy6JvfvHFs0H966XaRS48bIoQ0jQ+NRGO/NthKo0tUQrPatsRqWh0UROEnvGkH6fvp0FOuyI9zsqinVgSR8ZFzf4243k0s2NlTAJvAH3cIjM3hM1gZwz8jhibP8SsJBQq6wLjheAdswhaR3CfDk9nLM79h9nli/7hhGHB0/KRoODzw1T++X1wl/h7YhCUihUuBlwqXhhdFgUcddxaelO4u7s2hZUAvl8Ely3DqzFm4lvSOwYfxLbCJhkTUTwMfMWCXGfDjlbGOm1/uzWe3twEP/I48gURkt1vBvHIRbKKxRRjMVw9Jq4tAViES2ez23ri8axU8M6+hpRjYQEMi8sWVGGalW/vHMEnBjR++2Myk02+jb2Ywo76KVnvW1OCs3z88gdN/jI6OOsAiqM5ldOPmcjmqK2sWuvnPhp4TOMyhuI2rvr/w+/D59aJDwQ1ORSKR69AanJhUvQKS2EQydWuQzvfjV0zOXyiBEZA/WHk9qUp0u5ILPoYWQSQos+/4kWpTvHzWrC4Oh8MKlgxxFBUM3bFoNHobmkSl/BB2ieTs1Kizs7MZtAZZJYHusZ2ZK6AKv7Oz8/+hTm0D2IetyKhGV1fXwxV5L2r8fv+9JtoHDk2CggSJrNecbEcbUQ0q0KnPqatECu1sJxCy5SKdyLSprfA01e09yPaCzl9Dd9QCdfUU5xRm0Dw81DbsviGoCUvhRwcYyzmlXC4XLL73oGZNoRKQchRV6w307eUB+lfJZNKD7YG7WCzqtfSoMh8fH0/FYjHd6t7/AQLCo66p6jzVAAAAAElFTkSuQmCC" alt="My Ads" className="me-2" />
                                    <span>My Ads</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/my-ads-response" className="nav-content-bttn open-font d-flex align-items-center">
                                    <img src="https://lzycrazy.com/assets/adsresponse.4caecad9.png" width="33" height="33" className="me-2" />
                                    <span>Response</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className="nav-content-bttn open-font d-flex align-items-center">
                                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAYAAAA6RwvCAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAQ8SURBVHgBtVhNbFtFEJ7ZZ8c/2K1RgpNUiEQoCLXgZ5sa5UdQuHFBCIE4IA4UeusFgZC4gCq4cEBCHIALXLgB4gDqCSFKWii2S3GdthIFRShIQJUqDW5j2YnfezvM1HblWvbz80v9SdHu253d/TIzOztjhOFgxGKxca210U+AiIxAIFDfYvBnAzwi4FEuFo1G40opZ2pq6trq6uqOm/Dc3FyIm7ht25F6vV7hfhV2ibFwODwzMTERB5+Ix+PjkUjkbtkL/IBNkGQtTMNtQjKZnJQ9h1okC3ajhX5IMDyTEcHp6ekojAiy90AyIiCsYcQQbbuRGfOitnRRl1I/20/DLsFk9kGHA6t2hz07Wa1Wr/RbePAsBaUlDeOAcENrmXPkW3sbGxv/svL3dROJSRDqt8jMO5/aNnzbOZbK2y/QDl18sEAm+ASfebV9KW4QYW0kOBBe7SWcLdIRRHw5QNbrneNRNI5z86cB9M1zX5IBPsBa2arVarE2kTE3bTgajrJBPvt1cazUWlAxCCrFBbwOYXyeh2Yv3eM8AT4h0ZobQ3Hki09OTvYNwQhkaqKT7e/yokqXlwJfS38lg/8AwV8KcH973jxNydQZ69CBixQDD2C/rMj7peQ9cH07EDYRcI/L/F4iqEk3XXDeggBdVto4GazShexPjRwMRkMeUcX2d1zFCM4A4rPtW9MJcVhuEmhb3x8oWI8wq3dA07ug8SFC+F0HAl+BR6hBAgbhq0gwb1n0ebZEM+3xdNF+UqH6kE33wcqj4T/GMLDEw9fPLxpvrizhObSd9/l7Zv8p8vReDSRSWsJV1tozSmFON2jNLOhf0gXaBFLHWVNflOfVayLH5ilzs8cs2kdYe3yp1GH+XvvtEF4GD0B5YfkKDRS+/xLFI/85T2nA+xBhiw8qlB/G050y6SJrgTXY3BkqGvRLF+abju0G4eCZiFekfmwcZJPN4B3GiXIWK17WCIeBphkGEvIpiOM6CLrRgNQwa72migMJ6B04pnfoFQMM9l9xPuLrrNcI6L3zC8bHbuslz1WtyOYvjWPce5b2UoNKSPQi/x3FEN65ssDGAesBPuIEx6CP+K065rLFzchuDJ3CdcAs0ifpvF7L5OuzvebZgd9gzVAmbz3ea15y2lay3XQW8IHsKbrLLGonk7cPu8kxkR/MAn3Xa66VWDd9hIlUpVyQ1xCGgBMGEzUoR2Ey5UYG6QoHxce6h0UboVDoGpccTSJCQMoG7g5FhCyw2Bm2FeHbEjj6QgsZ+Lt7OBgMRvnsW9MPsdPtLB8GQfzypm/0mhxFGdENSdClznEVEoFRlhOMiOdbKmRGVFbEfFV7u4kv3RD/G2iOfhBnknsu1wz8I8bKne3rmC0geIA4MKdzCcuyah5/95BiLSEpoMQoL/HJE5E25L9aX1+Pyf3f3t62+8nJ+5XL5TaXl5dtr3v/DwIHlHJGgyuKAAAAAElFTkSuQmCC" alt="Log out" className="me-2" />
                                    <span>Log out</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
=======
        <nav>
            <ul>
                <li>
                    <Link to="/user-page">
                        <img src='assets/images/favicon.png' alt="user" />
                        <span>Arvind Bhandari</span>
                    </Link>
                </li>
                <li>
                    <Link to="/market-Place">
                        <img src='assets/images/marketplace.png' alt="Market" />
                        <span>Market</span>
                    </Link>
                </li>
                <li>
                    <Link to="/my-ads">
                        <img src='assets/images/myads.png' alt="My Ads" />
                        <span>My Ads</span>
                    </Link>
                </li>
                <li>
                    <Link to="/my-ads-response">
                        <img src='assets/images/response.png' alt="resp" />
                        <span>Response</span>
                    </Link>
                </li>
                <li>
                    <Link to="#">
                        <img src='assets/images/logout.png' alt="Log out" />
                        <span>Log out</span>
                    </Link>
                </li>
            </ul>
>>>>>>> b56c7e646df87db36fb632894409de285ecec234
        </nav>
    );
}

export default Sidebar;
