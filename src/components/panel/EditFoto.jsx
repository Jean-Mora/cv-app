import { useCv } from "../../context/CvContext";

export default function EditFoto() {
  const { cv, setCv } = useCv();

  // Manejar subida de imagen como base64
  const handleFile = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setCv({ ...cv, foto: reader.result });
    };

    reader.readAsDataURL(file);
  };

  return (
    <div className="panel-section">
      <h3>📸 Foto</h3>

      <input
        type="file"
        accept="image/*"
        onChange={handleFile}
      />

      {cv.foto && (
        <img
          src={cv.foto}
          alt="Foto"
          style={{
            width: "120px",
            height: "120px",
            borderRadius: "10px",
            marginTop: "10px",
            objectFit: "cover",
            border: "2px solid #ccc",
          }}
        />
      )}
    </div>
  );
}
