export default function PhotoResult({imgs}) {
    return (
        <div style={{ width: "800px", height: "600px", right: "0px", top: "0px", position: "absolute", overflow: "scroll", textAlign: "center" }}>
            <img src={imgs[0]} alt="" />
            <img src={imgs[1]} alt="" />
            <img src={imgs[2]} alt="" />
            <img src={imgs[3]} alt="" />
        </div>
    )
}