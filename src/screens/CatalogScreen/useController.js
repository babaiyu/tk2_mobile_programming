import { useState } from "react";

export default function useController() {
  const [catalogs] = useState([
    {
      id: 1,
      title: "Rumah Nuansa Amerika",
      description:
        "Rumah dengan nuansa Amerika biasanya merujuk pada gaya arsitektur dan dekorasi interior yang terinspirasi oleh desain rumah di Amerika Serikat. Gaya ini bisa sangat bervariasi karena Amerika Serikat memiliki berbagai macam gaya arsitektur yang berbeda tergantung pada wilayah dan periode sejarah",
      img: require("../../assets/house_1.jpg"),
    },
    {
      id: 2,
      title: "Rumah Modern",
      description:
        "Rumah modern adalah jenis rumah yang menekankan desain minimalis, garis-garis bersih, dan penggunaan bahan-bahan modern seperti kaca, baja, dan beton. Rumah modern mencerminkan pendekatan yang lebih kontemporer terhadap desain dan sering ditemui di perkotaan.",
      img: require("../../assets/house_2.jpg"),
    },
    {
      id: 3,
      title: "Rumah Nuansa Amerika",
      description:
        "Rumah mewah adalah jenis properti yang dirancang dan dibangun dengan standar tinggi dan fitur-fitur eksklusif. Rumah mewah seringkali mencerminkan status sosial dan kekayaan, dan mereka dirancang untuk memberikan kenyamanan, kemewahan, dan gaya hidup yang istimewa kepada pemiliknya.",
      img: require("../../assets/house_3.jpg"),
    },
  ]);

  return { catalogs };
}
