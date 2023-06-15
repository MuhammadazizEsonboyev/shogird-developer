
function VideoPlayer() {
  return (
    <div style={{display: "flex", justifyContent: "center"}}>
      <video  muted autoPlay loop className="w-[200px] h-[220px]" style={{borderRadius: "20px", boxShadow: "1px 1px 10px gray"}}>
        <source src="../../src/assets/video/video.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

export default VideoPlayer;