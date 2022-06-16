import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { Link } from 'react-router-dom'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Example() {
    return (
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <Menu.Button className="flex justify-center items-center w-full text-md font-medium text-[#969ba1] outline-none">
                    <svg className='h-4 mx-2 fill-white' focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></svg>
                    More
                </Menu.Button>
            </div>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="origin-top-right absolute bg-[#202124] right-0 mt-2 w-32 rounded-md shadow-lg  ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                        <Menu.Item>
                            {({ active }) => (
                                <Link
                                    to="/search/maps"
                                    className='flex items-center text-[#969ba1] w-full hover:bg-[#474b4f] py-1 '
                                >
                                    <svg className='h-4 mx-2 fill-[#969ba1]' focusable="false" viewBox="0 0 16 16"><path d="M7.503 0c3.09 0 5.502 2.487 5.502 5.427 0 2.337-1.13 3.694-2.26 5.05-.454.528-.906 1.13-1.358 1.734-.452.603-.754 1.508-.98 1.96-.226.452-.377.829-.904.829-.528 0-.678-.377-.905-.83-.226-.451-.527-1.356-.98-1.959-.452-.603-.904-1.206-1.356-1.734C3.132 9.121 2 7.764 2 5.427 2 2.487 4.412 0 7.503 0zm0 1.364c-2.283 0-4.14 1.822-4.14 4.063 0 1.843.86 2.873 1.946 4.177.468.547.942 1.178 1.4 1.79.34.452.596.99.794 1.444.198-.455.453-.992.793-1.445.459-.61.931-1.242 1.413-1.803 1.074-1.29 1.933-2.32 1.933-4.163 0-2.24-1.858-4.063-4.139-4.063zm0 2.734a1.33 1.33 0 11-.001 2.658 1.33 1.33 0 010-2.658"></path></svg>
                                    Maps
                                </Link>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <Link
                                to="/search/shopping"
                                    className='flex items-center text-[#969ba1] w-full hover:bg-[#474b4f] py-1 '
                                >
                                    <svg className='h-4 mx-2 fill-[#969ba1]' focusable="false" viewBox="0 0 24 24"><path d="M21.11 2.89A3.02 3.02 0 0 0 18.95 2h-5.8c-.81 0-1.58.31-2.16.89L7.25 6.63 2.9 10.98a3.06 3.06 0 0 0 0 4.32l5.79 5.8a3.05 3.05 0 0 0 4.32.01l8.09-8.1c.58-.58.9-1.34.9-2.16v-5.8c0-.81-.32-1.59-.89-2.16zM20 10.85c0 .28-.12.54-.32.74l-3.73 3.74-4.36 4.36c-.41.41-1.08.41-1.49 0l-2.89-2.9-2.9-2.9a1.06 1.06 0 0 1 0-1.49l8.1-8.1c.2-.2.46-.3.74-.3l5.8-.01A1.05 1.05 0 0 1 20 5.05v5.8zM16 6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2"></path></svg>
                                    Shopping
                                </Link>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <Link
                                to="/search/flights"
                                    className='flex items-center text-[#969ba1] w-full hover:bg-[#474b4f] py-1 '
                                >
                                    <svg className='h-4 mx-2 fill-[#969ba1]' focusable="false" viewBox="0 0 24 24"><path d="M12.98 12.89l-4.03 4.03.42 2.95L8.24 21l-1.87-3.37L3 15.76l1.12-1.12 2.95.42 4.03-4.03L3 6.77l1.5-1.5 10.04 2.32 4.2-4.2a1.32 1.32 0 0 1 1.87 0c.52.52.52 1.36 0 1.87l-4.2 4.2 2.32 10.04-1.5 1.5-4.25-8.11"></path></svg>
                                    Flights
                                </Link>
                            )}
                        </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <Link
                                    to="/search/finance"
                                        className="flex items-center text-[#969ba1] w-full hover:bg-[#474b4f] py-1 "
                                    >
                                        <svg className='h-4 mx-2 fill-[#969ba1]' focusable="false" viewBox="0 0 24 24"><path d="M6 15.5l-3 2.94V10h3v5.5zm5-1.84l-1.57-1.34L8 13.64V6h3v7.66zM16 12l-3 3V2h3v10zm2.81-.19L17 10h5v5l-1.79-1.79L13 20.36l-3.47-3.02L5.75 21H3l6.47-6.34L13 17.64l5.81-5.83"></path></svg>
                                        Finance
                                    </Link>
                                )}
                            </Menu.Item>
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    )
}