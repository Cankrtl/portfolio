import { Link } from "react-router-dom";
import { IconBolt } from "./Icons";
import classes from "../assets/styles/Logo.module.css";

export function Logo(){
return (
  <Link to="/" className={classes.Logo}>
    <IconBolt />
    Can Kartal
  </Link>
)
}
  
   

