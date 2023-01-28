import "./block.css";

function ObjectEditBlock() {
  const tests = [
    ["objectName", "tit"],
    ["text", "Hello world!"],
  ];
  return (
    <div className="obj">
      <h5 style={{
        textAlign: "center",
        color: "white",
        fontFamily: "sans-serif",
      }}>ObjectName</h5>
      <div
        style={{
          margin: "3px",
        }}
      >
        <table
          border="1"
          cellspacing="0"
          style={{
            color: "#9d9d9d",
            width: "100%",
            fontFamily: "sans-serif",
            fontSize: "12px"
          }}
        >
          {tests.map((everyItem) => {
            return (
              <tr style={{ height: "10px" }}>
                <td style={{ width: "100px" }}>{everyItem[0]}</td>
                <td>{everyItem[1]}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
}

export default ObjectEditBlock;
