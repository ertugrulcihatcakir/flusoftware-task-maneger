"use client";

import React from 'react';
import styled from 'styled-components';
import { useGlobalState } from "@/app/context/globalProvider";

import menu  from "@/app/utilis/menu";
import Link from 'next/link';
import { usePathname, useRouter } from "next/navigation";
import Button from '../Button/Button';
import { logout } from '@/app/utilis/Icons';
import { UserButton, useClerk, useUser } from '@clerk/nextjs';

function Sidebar() {
  const { theme } = useGlobalState();
  const { signOut } = useClerk();
  const router = useRouter();
  const pathname = usePathname();
  const handleClick = (link: string) => {
    router.push(link);
  };
  const { user } = useUser();
  const { firstName, lastName, imageUrl } = user || {
    firstName: "",
    lastName: "",
    imageUrl: "",
  };
  
  return (
    <SidebarStyled theme={theme}>
      <div className="profile">
        <div className="profile-overlay"></div>
        <div className="image">
          <img width={70} height={70} src={ imageUrl } alt="profile" />
        </div>
        <div className="user-btn absolute z-20 top-0 w-full h-full">
          <UserButton />
        </div>
        <h1>
          <span>{ firstName }</span>
          <span>{ lastName }</span>
        </h1>
      </div>
      <ul className="nav-items">
        {menu.map((item) => {
          
          const link = item.link;
          return ( <li 
            key={item.id}
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

  .user-btn {
    .cl-rootBox {
      width: 100%;
      height: 100%;

      .cl-userButtonBox {
        width: 100%;
        height: 100%;

        .cl-userButtonTrigger {
          width: 100%;
          height: 100%;
          opacity: 0;
        }
      }
    }
  }
  
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