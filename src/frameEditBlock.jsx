import "./block.css";
import "./style.css";

function FrameEditBlock() {
  const tests = ["eee", 2, 3, 4, 5, 6, 7, 8];
  return (
    <div className="header">
      <div
        className="objectColumn"
        style={{
          color: "white",
          fontSize: "12px",
          margin: "0"
        }}
      >
        <table>
          {tests.map((everyobj) => {
            return (
              <tr>
                <td className="objectItem">
                  {everyobj}
                </td>
                <br />
              </tr>
            );
          })}
        </table>
      </div>
      <div className="frameColumn" id="frame"></div>
    </div>
  );
}

export default FrameEditBlock;
