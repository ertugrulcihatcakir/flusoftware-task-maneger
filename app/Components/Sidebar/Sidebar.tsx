"use client";

import React from 'react';
import styled from 'styled-components';
import { useGlobalState } from "@/app/context/globalProvider";

import menu  from "@/app/utilis/menu";
import Link from 'next/link';
import { usePathname, useRouter } from "next/navigation";
import Button from '../Button/Button';
import { logout } from '@/app/utilis/Icons';
import { useClerk } from '@clerk/nextjs';

function Sidebar() {
  const { theme } = useGlobalState();
  const { signOut } = useClerk();
  const router = useRouter();
  const pathname = usePathname();
  const handleClick = (link: string) => {
    router.push(link);
  };

  
  return (
    <SidebarStyled theme={theme}>
      <div className="profile">
        <div className="profile-overlay"></div>
        <div className="image">
          <img width={70} height={70} src="data:image/jpeg;base64,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" alt="profile" />
        </div>
        <h1>
          <span>Cihat</span>
          <span>Çakır</span>
        </h1>
      </div>
      <ul className="nav-items">
        {menu.map((item) => {
          
          const link = item.link;
          return ( <li 
            className={`nav-item ${pathname === link ? "active" : ""}`} 
            onClick={() => {
              handleClick(item.link);
            }}>

            {item.icon}
            <Link href={link}>{item.title}</Link>
          </li> );
        })}
      </ul>
      <div className="sign-out relative m-6">
        <Button
          name={"Sign Out"}
          type={"submit"}
          padding={"0.4rem 0.8rem"}
          borderRad={"0.8rem"}
          fw={"500"}
          fs={"1.2rem"}
          icon={logout}
          click={() => {
            signOut(() => router.push("/signin"));
          }}
        />
      </div>
    </SidebarStyled>
  )
}

const SidebarStyled = styled.nav`
  position: relative;
  background-color: ${(props) => props.theme.colorBg2};
  width: ${(props) => props.theme.sidebarWidth};
  border: 2px solid ${(props) => props.theme.borderColor2};
  border-radius: 1rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  color: ${(props) => props.theme.colorCrey3};

  .profile{
    margin: 1.5rem;
    padding: 1rem 0.8rem;
    position: relative;
    font-weigh: 500;
    color: ${(props) => props.theme.colorCrey0};
    cursor: pointer;
    border-radiu: 1rem;
    
    display: flex;
    align-items: center;

    .profile-overlay{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      backgdrop-filter: blur(10px);
      z-index: 0;
      background: ${(props) => props.theme.colorBg3};
      transition: all 0.55s linear;

      border: 2px solid ${(props) => props.theme.borderColor2};
      border-radius: 1rem;

      opacity: 0.2;
    }

    h1{
      font-size: 0.8rem;
      display: flex;
      flex-direction: column;
      line-height: 0.9;
    }

    .image, h1{
      position: relative;
      z-index: 1;
    }

    .image{
      flex-shhrink: 0;
      display: inline-block;
      overflow: hidden;
      transition: all 0.5s ease;
      border-radius: 100%;

      width: 70px;
      height: 70px;

      img {
        border-radius: 100%;
        transition: all 0.5s ease;
      }
    }
    > h1 {
      margin-left: 0.8rem;
      font-size: clamp(1.2rem, 4vw, 1.4rem);
      line-height: 100%;
    }

    &:hover {
      .profile-overlay {
        opacity: 1;
        border: 2px solid ${(props) => props.theme.borderColor2};
      }

      img {
        transform: scale(1.1);
      }
    }
  }
  .nav-item {
    position: relative;
    padding: 0.8rem 1rem 0.9rem 2.1rem;
    margin: 0.3rem 0;

    display: grid;
    grid-template-columns: 40px 1fr;
    cursor: pointer;
    align-items: center;

    &::after {
      position: absolute;
      content: "";
      left: 0;
      top: 0;
      width: 0;
      height: 100%;
      background-color: ${(props) => props.theme.activeNavLinkHover};
      z-index: 1;
      transition: all 0.3s ease-in-out;
    }
    &::before {
      position: absolute;
      content: "";
      right: 0;
      top: 0;
      width: 0%;
      height: 100%;
      background-color: ${(props) => props.theme.colorTurquoise};

      border-bottom-left-radius: 5px;
      border-top-left-radius: 5px;
    }
    a {
      font-weight: 500;
      transition: all 0.3s ease-in-out;
      z-index: 2;
      line-height: 0;
    }

    i {
      display: flex;
      align-items: center;
      color: ${(props) => props.theme.colorIcons};
    }

    &:hover {
      &::after {
        width: 100%;
      }
    }
  }
  .active {
    background-color: ${(props) => props.theme.activeNavLink};

    i,
    a {
      color: ${(props) => props.theme.colorIcons2};
    }
  }

  > button {
      margin: 1.5rem;
  }
  
  .active::before {
    width: 0.3rem;
  }

  
  
`;

export default Sidebar;