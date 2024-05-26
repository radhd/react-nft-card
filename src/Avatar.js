import avatarPicture from "./images/image-avatar.png";

function Avatar() {
  return (
    <div>
      <div
        style={{
          height: "1px",
          width: "100%",
          backgroundColor: "var(--neutral-very-dark-blue-line)",
          margin: "16px 0",
        }}
      ></div>
      <div className="flex-center" style={{ gap: "16px" }}>
        <img
          style={{ border: "1px solid white", borderRadius: 50 }}
          src={avatarPicture}
          height={"33px"}
        />
        <span style={{ color: "var(--primary-soft-blue)" }}>
          Creation of <span style={{ color: "white" }}>{returnName()}</span>
        </span>
      </div>
    </div>
  );

  function returnName() {
    return "Jules Wyvern";
  }
}

export default Avatar;
