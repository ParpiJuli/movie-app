import map from 'lodash/map';
import tw from 'tailwind-styled-components';

function SelectSearchField({handleOnChange}: {handleOnChange:  React.ChangeEventHandler}) {
  const setOptions = () => {
    const array = [];
    const repeat = 10;

    for (let i = 0; i < repeat; i++) {
      array.push(
        {
        value: Math.round(new Date().getFullYear()) - 1 * i
        }
      );
    }
    return array;
  };

  const getOptionsSelect = () => {
    const options = setOptions();
    return map(options, (option, key) => {
      return (
        <option value={option.value} key={key}>{option.value}</option>
      );
    });
  };

  return (
    <SelectInput
      id="select-year"
      placeholder='Search by year...'
      defaultValue={'default'}
      onChange={handleOnChange}
    >
      {getOptionsSelect()}
      <option value="" key="default" >Select year</option>
    </SelectInput>
  );
}

const SelectInput = tw.select`
  flex
  border-0
  justify-start;
  px-5
  py-4
  sm:px-2
  lg:px-5
  text-sm
  sm:max-w-fit
  md:text-md
  bg-transparent
  focus:outline-none
`;

export default SelectSearchField;
