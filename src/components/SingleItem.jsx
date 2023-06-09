import React, { useReducer } from 'react';
import { AiOutlineFileText } from 'react-icons/ai';
import { LuFolderOpen } from 'react-icons/lu';

//File reducers
const fileReducer = (state, action) => {
  switch (action) {
    case 'public':
      return { ...state, public: !state.public };
    case 'src':
      return { ...state, src: !state.src };
    case 'components':
      return { ...state, components: !state.components };
    case 'styles':
      return { ...state, styles: !state.styles };
    case 'Custom Styles':
      return { ...state, 'Custom Styles': !state['Custom Styles'] };
    case 'modules':
      return { ...state, modules: !state.modules };
    default:
      return state;
  }
};

export default function SingleItem({ item }) {
  const initialValue = {
    public: false,
    src: false,
    components: false,
    modules: false,
    styles: false,
    'Custom Styles': false,
  };
  const colors = { red: 'red', blue: 'blue' };

  const [isFolderOpen, dispatch] = useReducer(fileReducer, initialValue);
  return (
    <ul>
      <li>
        {item.type === 'dir' ? (
          <LuFolderOpen
            className="folder"
            onClick={() => dispatch(item.name)}
          />
        ) : (
          <AiOutlineFileText
            className="file"
            //color={color['red']}
          />
        )}
        <h5 className="title">{item.name}</h5>

        {isFolderOpen[item.name] &&
          item.children &&
          item.children.map(item => {
            return <SingleItem item={item} />;
          })}
      </li>
    </ul>
  );
}
