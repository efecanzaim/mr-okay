export interface Product {
  id: string;
  name: string;
  collection: string;
  variant: string;
  price: number;
  ml: number;
  image: string;
  category: "businessman" | "smartwoman";
  subcategory: "classic" | "avant-garde" | "elegant" | "holiday" | "weekend";
  scent: {
    top: string[];
    middle: string[];
    base: string[];
  };
  description: string;
  family: string;
  alt_notes?: string[];
}

export const products: Product[] = [
  // BUSINESSMAN - CLASSIC
  {
    id: "fougere-classic",
    name: "Fougère",
    collection: "Businessman",
    variant: "Classic",
    price: 1250,
    ml: 50,
    image: "/products/fougere.jpg",
    category: "businessman",
    subcategory: "classic",
    scent: {
      top: ["Seffaf Şişe", "Gümüş Rengi Kapak ve Valf", "Siyah Baskı"],
      middle: ["Bergamot", "Lavanta"],
      base: ["Geranyum", "Adaçayı"],
    },
    description: "Klasik, disiplinli, özgüvenli",
    family: "Fougère",
    alt_notes: ["Meşe yosunu", "Vetiver", "Tonka fasülyesi"],
  },

  // BUSINESSMAN - AVANT-GARDE
  {
    id: "woody-spicy-avant-garde",
    name: "Woody, Spicy",
    collection: "Businessman",
    variant: "Avant-Garde",
    price: 1250,
    ml: 50,
    image: "/products/woody-spicy.jpg",
    category: "businessman",
    subcategory: "avant-garde",
    scent: {
      top: ["Lacivert (Semi Transparan) Şişe", "Gümüş Rengi Kapak ve Valf", "Gümüş Baskı", "Lacivert Kutu", "Gümüş Kofre Baskı", "Sefofan"],
      middle: ["Siyah Biber", "Zencefil", "Bergamot", "Kakule"],
      base: ["Tütsu", "Suet Deri", "Kakao özü veya bitter çikolata", "Adaçayı", "Sedir Ağacı"],
    },
    description: "Yaratıcı, özgün, cesur",
    family: "Woody, Spicy",
    alt_notes: ["Vetiver", "Amber", "Misk", "Labdanum", "Oud"],
  },

  // BUSINESSMAN - ELEGANT
  {
    id: "woody-aromatic-pudralı-elegant",
    name: "Woody, Aromatic, Pudralı",
    collection: "Businessman",
    variant: "Elegant",
    price: 1250,
    ml: 50,
    image: "/products/woody-aromatic.jpg",
    category: "businessman",
    subcategory: "elegant",
    scent: {
      top: ["Siyah Şişe (Semi Transparan)", "Gümüş Rengi Kapak ve Valf", "Gümüş Baskı", "Siyah Kutu", "Gümüş Kofre Baskı", "Sefofan"],
      middle: ["Bergamot", "Pembe Biber", "Lavanta"],
      base: ["Menekşe Yaprakları", "Süsen (Iris)", "Adaçayı"],
    },
    description: "Sofistike, zarif ve entelektüel",
    family: "Woody, Aromatic, Pudralı",
    alt_notes: ["Sandal Ağacı", "Vetiver", "Kehribar", "Misk"],
  },

  // BUSINESSMAN - HOLIDAY
  {
    id: "aquatic-narenciye-holiday",
    name: "Aquatic, Narenciye – Aromatik – Okyanus Ferahlığı",
    collection: "Businessman",
    variant: "Holiday",
    price: 1250,
    ml: 50,
    image: "/products/aquatic-narenciye.jpg",
    category: "businessman",
    subcategory: "holiday",
    scent: {
      top: ["Açık Mavi Şişe (Semi Transparan)", "Gümüş Rengi Kapak ve Valf", "Gümüş Baskı", "Beyaz Kutu", "Gümüş Kofre Baskı", "Sefofan"],
      middle: ["Limon", "Nane", "Yeşil Elma", "Deniz Esintisi (Marine Akkorları)"],
      base: ["Lavanta", "Ginger (Zencefil)", "Geranium"],
    },
    description: "Hayatı dolu dolu yaşayan, özgür ruhlu ve enerjik bir iş adamı. Tatilde, modern ve hafif.",
    family: "Aquatic, Narenciye – Aromatik – Okyanus Ferahlığı",
    alt_notes: ["Sedir Ağacı", "Kehribar", "Beyaz Misk"],
  },

  // BUSINESSMAN - WEEKEND
  {
    id: "amber-misk-spicy-weekend",
    name: "Amber - Misk - Spicy",
    collection: "Businessman",
    variant: "Weekend",
    price: 1250,
    ml: 50,
    image: "/products/amber-misk.jpg",
    category: "businessman",
    subcategory: "weekend",
    scent: {
      top: ["Kırmızı Şişe (Semi Transparan)", "Gümüş Rengi Kapak ve Valf", "Gümüş Baskı", "Kırmızı Kutu", "Gümüş Kofre Baskı", "Sefofan"],
      middle: ["Greyfurt", "Bergamot", "Ardıç Tohumu"],
      base: ["Lavanta", "Adaçayı", "Yeşil Çay Akkoru"],
    },
    description: "Hafta sonu keyifli, modern ve hafif sonlarının keyfini huzurla yaşar.",
    family: "Amber - Misk - Spicy",
    alt_notes: ["Vetiver", "Paçuli", "Kashmir Wood"],
  },
];

// Helper functions
export const getProductsByCategory = (category: Product["category"]) => {
  return products.filter((product) => product.category === category);
};

export const getProductsBySubcategory = (
  category: Product["category"],
  subcategory: Product["subcategory"]
) => {
  return products.filter(
    (product) =>
      product.category === category && product.subcategory === subcategory
  );
};

export const getProductById = (id: string) => {
  return products.find((product) => product.id === id);
};

export const getFeaturedProducts = (count: number = 4) => {
  return products.slice(0, count);
};
