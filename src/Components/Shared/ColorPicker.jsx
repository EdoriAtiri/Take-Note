import { useState } from 'react';

function ColorPicker({ color, select }) {
  const [selected, setSelected] = useState('');

  const listStyles = `relative w-10 h-10 text-center rounded-full border transform checked:bg-white hover:scale-110 `;
  const labelStyles = `absolute top-1/2 left-1/2 w-10 h-10 rounded-full transform -translate-x-1/2 -translate-y-1/2  cursor-pointer hover:scale-110 checked:scale-110 border`;
  function handleChange(e) {
    console.log(e.target.value);
    setSelected(e.target.value);
    select(e.target.value);
  }

  return (
    <ul className="bg-blue flex gap-1 justify-around">
      <li className={`${listStyles} bg-red-500`}>
        <input
          type="radio"
          id="red"
          name="red"
          value="red"
          checked={selected === 'red'}
          onChange={handleChange}
        />
        <label className={`${labelStyles} bg-red-500`} htmlFor="red"></label>
      </li>
      <li className={`${listStyles} bg-orange-500`}>
        <input
          type="radio"
          id="orange"
          name="orange"
          value="orange"
          checked={selected === 'orange'}
          onChange={handleChange}
        />
        <label
          className={`${labelStyles} bg-orange-500`}
          htmlFor="orange"
        ></label>
      </li>
      <li className={`${listStyles} bg-yellow-500`}>
        <input
          type="radio"
          id="yellow"
          name="yellow"
          value="yellow"
          checked={selected === 'yellow'}
          onChange={handleChange}
        />
        <label
          className={`${labelStyles} bg-yellow-500`}
          htmlFor="yellow"
        ></label>
      </li>
      <li className={`${listStyles} bg-purple-500`}>
        <input
          type="radio"
          id="purple"
          name="purple"
          value="purple"
          checked={selected === 'purple'}
          onChange={handleChange}
        />
        <label
          className={`${labelStyles} bg-purple-500`}
          htmlFor="purple"
        ></label>
      </li>
      <li className={`${listStyles} bg-blue-500`}>
        <input
          type="radio"
          id="blue"
          name="blue"
          value="blue"
          checked={selected === 'blue'}
          onChange={handleChange}
        />
        <label className={`${labelStyles} bg-blue-500`} htmlFor="blue"></label>
      </li>
      <li className={`${listStyles} bg-cyan-500`}>
        <input
          type="radio"
          id="cyan"
          name="cyan"
          value="cyan"
          checked={selected === 'cyan'}
          onChange={handleChange}
        />
        <label className={`${labelStyles} bg-cyan-500`} htmlFor="cyan"></label>
      </li>
      <li className={`${listStyles} bg-teal-500`}>
        <input
          type="radio"
          id="teal"
          name="teal"
          value="teal"
          checked={selected === 'teal'}
          onChange={handleChange}
        />
        <label className={`${labelStyles} bg-teal-500`} htmlFor="teal"></label>
      </li>
      <li className={`${listStyles} bg-stone-500`}>
        <input
          type="radio"
          id="stone"
          name="stone"
          value="stone"
          checked={selected === 'stone'}
          onChange={handleChange}
        />
        <label
          className={`${labelStyles} bg-stone-500`}
          htmlFor="stone"
        ></label>
      </li>
    </ul>
  );
}

export default ColorPicker;
