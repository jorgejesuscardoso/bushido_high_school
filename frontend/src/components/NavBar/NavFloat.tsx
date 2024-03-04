import { useEffect, useRef, useState } from "react";
import { ContainerCalendarMenu, ContainerMatricMenu, ContainerNewsMenu, NavFloats } from "./Style";
import { CalendarMenu, MatricMenu, NewsMenu } from "../Buttons/Menus";
import { FloatNavButtons } from "../Buttons/NavFloatBtn";
import { GetUserInfoOfStorage } from "../../utils/LocalStorage";

export const NavFloat = () => {
  const refs = useRef<HTMLDivElement>(null);
  const [isNews, setIsNews] = useState(false);
  const [isMatric, setIsMatric] = useState(false);
  const [isCalendar, setIsCalendar] = useState(false);
  const [isFloatFixed, setIsFloatFixed] = useState(false);
  const [userRole, setUserRole] = useState(6);

  const handleNewsMenu = () => {
    setIsNews(true);
    setIsMatric(false);
    setIsCalendar(false);
  }

  const handleMatricMenu = () => {
    setIsMatric(true);
    setIsNews(false);
    setIsCalendar(false);
  }

  const handleCalendarMenu = () => {
    setIsCalendar(true);
    setIsMatric(false);
    setIsNews(false);
  }

  const handleCloseMenus = (event: React.MouseEvent | MouseEvent) => {
    if (!refs.current?.contains(event.target as Node)) {
      setIsNews(false);
      setIsMatric(false);
      setIsCalendar(false);
    }
  }

  const handleNavFloat = () => {
    if (window.scrollY > 100) {
      setIsFloatFixed(true);
    } else {
      setIsFloatFixed(false);
    }
  }

  useEffect(() => {    
    window.addEventListener('click', (event) => { handleCloseMenus(event) });

    return () => {
      window.removeEventListener('click', () => {});
    }
    
  }, []);

  useEffect(() => {

    window.addEventListener('scroll', handleNavFloat);
    return () => {
      window.removeEventListener('scroll', () => {});
    }

  },[]);
  useEffect(() => {
    const userRole = GetUserInfoOfStorage();
    if (userRole) {
      setUserRole(userRole.role_id);
    }
  }, []);

  return (
    <NavFloats className={ isFloatFixed ? 'floatFixed' : '' }>
  
      <FloatNavButtons 
        handleCloseMenus={ handleCloseMenus }
        handleNewsMenu={ handleNewsMenu }
        handleMatricMenu={ handleMatricMenu }
        handleCalendarMenu={ handleCalendarMenu }
        roler_id={ userRole }
      />

      {isNews && (
        <ContainerNewsMenu ref={ refs }>
          <NewsMenu />
        </ContainerNewsMenu>
      )}

      {isMatric && (
        <ContainerMatricMenu ref={ refs }>
          <MatricMenu />
        </ContainerMatricMenu>
      )}
      {isCalendar && (
        <ContainerCalendarMenu  ref={ refs }>
          <CalendarMenu />
        </ContainerCalendarMenu>
      )}
    </NavFloats>
  )
}