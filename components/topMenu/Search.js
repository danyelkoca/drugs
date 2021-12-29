import { TextField } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

const Search = () => {
  const router = useRouter();

  const data = useSelector((state) => state.data.value);

  const mapper = {
    dr: "Drug",
    di: "Disease",
    co: "Company",
  };

  let options = [];

  if (Object.keys(data).length > 0) {
    for (const i in mapper) {
      options = [...options, ...Object.keys(data[i]).map((d) => [i, d])];
    }
  }

  return (
    <div style={{ maxWidth: 500, flexGrow: 1 }}>
      <Autocomplete
        id="grouped-demo"
        options={options}
        getOptionLabel={(o) =>
          options.length > 0 ? data[o[0]][o[1]]["en"]["name"] : null
        }
        groupBy={(o) => mapper[o[0]]}
        onChange={(e, newValue) => {
          router.push(`/${mapper[newValue[0]].toLowerCase()}/${newValue[1]}`);
        }}
        renderInput={(params) => (
          <TextField
            label="Search"
            margin="dense"
            {...params}
            style={{
              width: "100%",
              background: "rgb(243, 246, 249)",
              borderColor: "transparent !important",
              borderRadius: 5,
            }}
            variant="outlined"
          />
        )}
      />
    </div>
  );
};

export default Search;
