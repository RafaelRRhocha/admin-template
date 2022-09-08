import Image from 'next/image';
import type { FC } from 'react';
import { MyTasks, Home, Logout, AddTask } from '../icons';
import ItemMenu from './ItemMenu';

interface LateralMenuProps {}

const LateralMenu: FC<LateralMenuProps> = ({}) => {
  return (
    <aside className="flex flex-col dark:bg-zinc-800 dark:text-zinc-200 bg-zinc-200 text-zinc-900">
      <div className="h-20 w-20 bg-gradient-to-r from-indigo-500 to-purple-800 flex items-center justify-center">
          <div className="flex flex-col items-center justify-center h-[40px] w-[40px] rounded-full bg-white scale-100 hover:scale-105 transition-transform">
            <a href="https://github.com/RafaelRRhocha" target="_blank" rel="noreferrer">
              <picture>
                <img className="w-full h-full" src="https://img.icons8.com/ios-glyphs/344/github.png" alt="ícone do github" />
              </picture>
            </a>
          </div>
      </div>
      <ul className="flex-grow">
        <ItemMenu url="/" text="Home" icon={Home}/>
        <ItemMenu url="/newtask" text="New Task" icon={AddTask}/>
        <ItemMenu url="/mytasks" text="My Tasks" icon={MyTasks}/>
      </ul>
      <ul>
        <ItemMenu onClickProps={() => console.log('funciona carai')} text="Exit" icon={Logout}/>
      </ul>
    </aside>
  );
}

export default LateralMenu;