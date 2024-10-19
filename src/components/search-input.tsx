import { TextInput } from "@mantine/core";
import SearchIcon from "../assets/icons/search";
interface SearchInputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function SearchInput({ value, onChange }: SearchInputProps) {
  return (
    <div className="h-12 flex-1 items-center overflow-hidden border border-[#E2E2E2] rounded-3xl px-7 flex gap-2">
      <SearchIcon className="w-6 h-auto" />
      <TextInput
        value={value}
        onChange={onChange}
        placeholder="Search employees"
        className="h-full flex-1 bg-red-400"
        classNames={{
          input: " h-12 border-none rounded-none",
        }}
      />
    </div>
  );
}

export default SearchInput;
