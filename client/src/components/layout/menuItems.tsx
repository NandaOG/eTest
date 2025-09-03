import { FiShoppingCart, FiUser, FiHeart, FiGift } from 'react-icons/fi';

export const menuItems = [
  { 
    label: "Shop", 
    subMenus: [
      { 
        label: "Women", 
        icon: <FiShoppingCart className="inline mr-2" />,
        children: [
          { label: "Dresses", path: "/women/dresses" },
          { label: "Tops & Blouses", path: "/women/tops" },
          { label: "Pants & Skirts", path: "/women/bottoms" },
          { label: "Outerwear", path: "/women/outerwear" }
        ]
      },
      { 
        label: "Men", 
        icon: <FiUser className="inline mr-2" />,
        children: [
          { label: "Suits", path: "/men/suits" },
          { label: "Shirts", path: "/men/shirts" },
          { label: "Pants", path: "/men/pants" },
          { label: "Casual Wear", path: "/men/casual" }
        ]
      },
      { 
        label: "Accessories", 
        icon: <FiGift className="inline mr-2" />,
        children: [
          { label: "Handbags", path: "/accessories/handbags" },
          { label: "Jewelry", path: "/accessories/jewelry" },
          { label: "Shoes", path: "/accessories/shoes" },
          { label: "Watches", path: "/accessories/watches" },
        ]
      },
      { 
        label: "Collections", 
        icon: <FiHeart className="inline mr-2" />,
        children: [
          { label: "Summer Collection", path: "/collections/summer" },
          { label: "Winter Collection", path: "/collections/winter" },
          { label: "Designer Collection", path: "/collections/designer" },
          { label: "Limited Edition", path: "/collections/limited" },
        ]
      }
    ]
  },
  { 
    label: "About",
    path: "/about"
  },
  { 
    label: "Contact", 
    path: "/contact" 
  },
  { 
    label: "Lookbook", 
    path: "/lookbook" 
  }
];
