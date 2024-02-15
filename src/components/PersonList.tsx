
type nameListData ={
    nameList: {
        first: string,
        last: string,
    }[]
}
const PersonList = (props: nameListData ) => {
  return (
    <div>
    {
        props.nameList.map((tex,i)=> <h2 key={i}>{tex.first} {tex.last}</h2>)
    }
    </div>
  );
};

export default PersonList;