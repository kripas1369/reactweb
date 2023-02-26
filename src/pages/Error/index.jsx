import React from "react";

import { Img, Text, List, Button } from "components";

const ErrorPage = () => {
  return (
    <>
      <div className="bg-gray_51 flex flex-col font-markoone gap-[116px] sm:gap-[40px] md:gap-[40px] items-center justify-start mx-[auto] sm:w-[100%] md:w-[100%] w-[auto]">
        <header className="bg-white_A700 flex h-[80px] md:h-[auto] items-center justify-between px-[120px] md:px-[20px] py-[19px] w-[100%]">
          <div className="flex md:flex-col flex-row md:gap-[40px] items-center justify-between w-[100%]">
            <div className="header-row my-[1px]">
              <div className="flex flex-row gap-[11px] items-center justify-start">
                <Img
                  src="images/img_home.svg"
                  className="h-[40px] w-[40px]"
                  alt="home"
                />
                <Text
                  className="font-normal not-italic text-left text-orange_A700 w-[auto]"
                  variant="body1"
                >
                  Relasto
                </Text>
              </div>
              <div className="mobile-menu">
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
            <ul className="flex sm:flex-1 sm:flex-col flex-row font-manrope sm:hidden items-center justify-between sm:w-[100%] w-[492px] common-row-list">
              <li className="sm:w-[100%] sm:my-[10px] w-[auto]">
                <List
                  className="sm:flex-col flex-row gap-[40px] grid grid-cols-3"
                  orientation="horizontal"
                >
                  <div className="flex flex-row gap-[6px] items-start justify-start w-[77px]">
                    <a
                      className="cursor-pointer font-semibold text-[16px] text-gray_900 text-left w-[auto]"
                      href="javascript:"
                    >
                      Home
                    </a>
                    <Img
                      src="images/img_arrowdown_gray_600_1.svg"
                      className="h-[16px] w-[16px]"
                      alt="arrowdown"
                    />
                  </div>
                  <div className="flex flex-row gap-[6px] items-start justify-start w-[77px]">
                    <a
                      className="cursor-pointer font-semibold text-[16px] text-gray_900 text-left w-[auto]"
                      href="javascript:"
                    >
                      Listing
                    </a>
                    <Img
                      src="images/img_arrowdown_gray_600_1.svg"
                      className="h-[16px] w-[16px]"
                      alt="arrowdown One"
                    />
                  </div>
                  <div className="flex flex-row gap-[6px] items-start justify-start w-[77px]">
                    <a
                      className="cursor-pointer font-semibold text-[16px] text-gray_900 text-left w-[auto]"
                      href="javascript:"
                    >
                      Agents
                    </a>
                    <Img
                      src="images/img_arrowdown_gray_600_1.svg"
                      className="h-[16px] w-[16px]"
                      alt="arrowdown Two"
                    />
                  </div>
                </List>
              </li>
              <li className="sm:w-[100%] sm:my-[10px] w-[auto] my-[1px]">
                <a
                  className="cursor-pointer font-semibold text-[16px] text-center text-gray_900"
                  href="javascript:"
                >
                  Property
                </a>
              </li>
              <li className="sm:w-[100%] sm:my-[10px] w-[auto] my-[1px]">
                <a
                  className="cursor-pointer font-semibold text-[16px] text-gray_900 text-left"
                  href="javascript:"
                >
                  Blog
                </a>
              </li>
            </ul>
            <div className="flex flex-row font-manrope gap-[40px] h-[42px] md:h-[auto] sm:hidden items-center justify-start w-[228px]">
              <Button
                className="flex items-center justify-center text-center w-[100%]"
                leftIcon={
                  <Img
                    src="images/img_search.svg"
                    className="mr-[8px] text-center"
                    alt="search"
                  />
                }
                size="sm"
              >
                <div className="bg-transparent cursor-pointer font-bold text-[18px] text-gray_900 text-left">
                  Search
                </div>
              </Button>
              <Button
                className="cursor-pointer font-semibold text-[16px] text-center text-white_A700 w-[100%]"
                shape="RoundedBorder10"
                size="xl"
                variant="FillGray900"
              >
                Log in
              </Button>
            </div>
          </div>
        </header>
        <div className="flex flex-col font-manrope gap-[30px] items-center justify-start md:px-[20px] sm:w-[100%] w-[auto]">
          <Img
            src="images/img_frame1000001686.svg"
            className="h-[480px] w-[464px]"
            alt="Frame1000001686"
          />
          <div className="flex flex-col gap-[24px] items-center justify-start w-[auto]">
            <Text
              className="text-center text-gray_900 tracking-[-0.56px] w-[auto]"
              as="h4"
              variant="h4"
            >
              Something wrong!
            </Text>
            <Button
              className="flex items-center justify-center text-center"
              rightIcon={
                <Img
                  src="images/img_arrowright_16X16.svg"
                  className="ml-[10px] text-center"
                  alt="arrow_right"
                />
              }
              shape="RoundedBorder10"
              size="5xl"
              variant="OutlineGray600"
            >
              <div className="bg-transparent cursor-pointer font-bold text-[18px] text-gray_900 text-left">
                Homepage
              </div>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
