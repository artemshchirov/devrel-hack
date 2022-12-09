import { FC } from 'react';
import Page from '../../layouts/Page';

const Contact: FC = () => {
  //  <style>
  //   .dark{color:rgba(55, 65, 81,1);}
  //   body{background:white !important;}
  // </style>

  return (
    <Page>
      <div className="holder">
        <div className="relative flex flex-col m-5 mx-auto overflow-hidden bg-white rounded-lg shadow-lg card w-96 hover:shadow-none">
          <img
            className="absolute top-0 w-full max-h-20 opacity-80"
            style={{ zIndex: '1' }}
            src="https://unsplash.com/photos/h0Vxgz5tyXA/download?force=true&w=640"
            alt=""
          />
          <div className="flex w-full m-3 ml-4 text-white profile">
            <img
              className="p-1 bg-white rounded-full w-28 h-28"
              style={{ zIndex: '2' }}
              src="https://images.pexels.com/photos/61100/pexels-photo-61100.jpeg?crop=faces&fit=crop&h=200&w=200&auto=compress&cs=tinysrgb"
              alt=""
            />
            <div className="flex flex-col ml-3 font-bold title mt-11">
              <div className="break-words name" style={{ zIndex: '2' }}>
                Sarah
              </div>
              {/* <!--  add [dark] className for bright background --> */}
              <div className="text-sm italic font-semibold text-black add dark">
                Model
              </div>
            </div>
          </div>
          <div className="buttons flex absolute bottom-0 font-bold right-0 text-xs text-gray-500 space-x-0 my-3.5 mr-3">
            <div className="p-1 px-4 border border-gray-300 rounded-r-sm cursor-pointer add rounded-l-2xl hover:bg-gray-700 hover:text-white">
              Contact
            </div>
            {/* <div className="p-1 px-4 border border-gray-300 rounded-l-sm cursor-pointer add rounded-r-2xl hover:bg-gray-700 hover:text-white">Bio</div> */}
          </div>
        </div>
        {/* <!-- card end --> */}

        <div className="relative flex flex-col m-5 mx-auto overflow-hidden bg-white rounded-lg shadow-lg card w-96 hover:shadow-none">
          <img
            className="absolute top-0 w-full max-h-20 opacity-80"
            style={{ zIndex: '1' }}
            src="https://unsplash.com/photos/iFPBRwZ4I-M/download?force=true&w=640"
            alt=""
          />
          <div className="flex w-full m-3 ml-4 text-white profile">
            <img
              className="p-1 bg-white rounded-full w-28 h-28"
              style={{ zIndex: '2' }}
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?crop=faces&fit=crop&h=200&w=200&auto=compress&cs=tinysrgb"
              alt=""
            />
            <div className="flex flex-col ml-3 font-bold title mt-11">
              <div className="break-words name" style={{ zIndex: '2' }}>
                Ricky
              </div>
              {/* <!--  add [dark] className for bright background --> */}
              <div className="text-sm italic font-semibold text-black add dark">
                Designer
              </div>
            </div>
          </div>
          <div className="buttons flex absolute bottom-0 font-bold right-0 text-xs text-gray-500 space-x-0 my-3.5 mr-3">
            <div className="p-1 px-4 border border-gray-300 rounded-r-sm cursor-pointer add rounded-l-2xl hover:bg-gray-700 hover:text-white">
              Contact
            </div>
            {/* <!-- <div className="p-1 px-4 border border-gray-300 rounded-l-sm cursor-pointer add rounded-r-2xl hover:bg-gray-700 hover:text-white">Bio</div> --> */}
          </div>
        </div>
        {/* <!-- card end --> */}

        <div className="relative flex flex-col m-5 mx-auto overflow-hidden bg-white rounded-lg shadow-lg card w-96 hover:shadow-none">
          <img
            className="absolute top-0 w-full max-h-20 opacity-80"
            style={{ zIndex: '1' }}
            src="https://unsplash.com/photos/w1_4YH5IhDg/download?force=true&w=640"
            alt=""
          />
          <div className="flex w-full m-3 ml-4 text-white profile">
            <img
              className="p-1 bg-white rounded-full w-28 h-28"
              style={{ zIndex: '2' }}
              src="https://images.pexels.com/photos/61100/pexels-photo-61100.jpeg?crop=faces&fit=crop&h=200&w=200&auto=compress&cs=tinysrgb"
              alt=""
            />
            <div className="flex flex-col ml-3 font-bold title mt-11 ">
              <div className="break-words name" style={{ zIndex: '2' }}>
                Dexter
              </div>
              {/* <!--  add [dark] className for bright background --> */}
              <div className="text-sm italic font-semibold text-black add dark">
                Director
              </div>
            </div>
          </div>
          <div className="buttons flex absolute bottom-0 font-bold right-0 text-xs text-gray-500 space-x-0 my-3.5 mr-3">
            <div className="p-1 px-4 border border-gray-300 rounded-r-sm cursor-pointer add rounded-l-2xl hover:bg-gray-700 hover:text-white">
              Contact
            </div>
            {/* <!-- <div className="p-1 px-4 border border-gray-300 rounded-l-sm cursor-pointer add rounded-r-2xl hover:bg-gray-700 hover:text-white">Bio</div> --> */}
          </div>
        </div>
        {/* <!-- card end --> */}

        <div className="relative flex flex-col m-5 mx-auto overflow-hidden bg-white rounded-lg shadow-lg card w-96 hover:shadow-none">
          <img
            className="absolute top-0 w-full max-h-20 opacity-80"
            style={{ zIndex: '1' }}
            src="https://unsplash.com/photos/TMxUnMAAwFA/download?force=true&w=640"
            alt=""
          />
          <div className="flex w-full m-3 ml-4 text-white profile">
            <img
              className="p-1 bg-white rounded-full w-28 h-28"
              style={{ zIndex: '2' }}
              src="https://images.pexels.com/photos/61100/pexels-photo-61100.jpeg?crop=faces&fit=crop&h=200&w=200&auto=compress&cs=tinysrgb"
              alt=""
            />
            <div className="flex flex-col ml-3 font-bold title mt-11">
              <div className="break-words name" style={{ zIndex: '2' }}>
                Jhon
              </div>
              {/* <!--  add [dark] className for bright background --> */}
              <div className="text-sm italic font-semibold text-black add dark">
                CEO
              </div>
            </div>
          </div>
          <div className="buttons flex absolute bottom-0 font-bold right-0 text-xs text-gray-500 space-x-0 my-3.5 mr-3">
            <div className="p-1 px-4 border border-gray-300 rounded-r-sm cursor-pointer add rounded-l-2xl hover:bg-gray-700 hover:text-white">
              Contact
            </div>
            {/* <!-- <div className="p-1 px-4 border border-gray-300 rounded-l-sm cursor-pointer add rounded-r-2xl hover:bg-gray-700 hover:text-white">Bio</div> --> */}
          </div>
        </div>
        {/* <!-- card end --> */}

        <div className="relative flex flex-col m-5 mx-auto overflow-hidden bg-white rounded-lg shadow-lg card w-96 hover:shadow-none">
          <img
            className="absolute top-0 w-full max-h-20 opacity-80"
            style={{ zIndex: '1' }}
            src="https://unsplash.com/photos/h0Vxgz5tyXA/download?force=true&w=640"
            alt=""
          />
          <div className="flex w-full m-3 ml-4 text-white profile">
            <img
              className="p-1 bg-white rounded-full w-28 h-28"
              style={{ zIndex: '2' }}
              src="https://images.pexels.com/photos/61100/pexels-photo-61100.jpeg?crop=faces&fit=crop&h=200&w=200&auto=compress&cs=tinysrgb"
              alt=""
            />
            <div className="flex flex-col ml-3 font-bold title mt-11">
              <div className="break-words name" style={{ zIndex: '2' }}>
                Sarah
              </div>
              {/* <!--  add [dark] className for bright background --> */}
              <div className="text-sm italic font-semibold text-black add dark">
                Model
              </div>
            </div>
          </div>
          <div className="buttons flex absolute bottom-0 font-bold right-0 text-xs text-gray-500 space-x-0 my-3.5 mr-3">
            <div className="p-1 px-4 border border-gray-300 rounded-r-sm cursor-pointer add rounded-l-2xl hover:bg-gray-700 hover:text-white">
              Contact
            </div>
            {/* <div className="p-1 px-4 border border-gray-300 rounded-l-sm cursor-pointer add rounded-r-2xl hover:bg-gray-700 hover:text-white">Bio</div> */}
          </div>
        </div>
        {/* <!-- card end --> */}
      </div>
    </Page>
  );
};

export default Contact;
