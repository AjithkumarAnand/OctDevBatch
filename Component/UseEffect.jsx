import { useEffect } from "react";

// const [dataSource, setDataSource] = useState([]);
useEffect(() => {
  const data = [];
  for (let index = 0; index < 7; index++) {
    data.push = {
      name: `Name ${index}`,
      address: `Address ${index}`,
    };
  }
}, []);

export default useEffect;
