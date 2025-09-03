import { FiShoppingCart, FiLayers, FiTool, FiBarChart2, FiSmartphone } from 'react-icons/fi';

export const menuItems = [
  // { 
  //   label: "Home", 
  //   path: "/" 
  // },
  { 
    label: "Services", 
    subMenus: [
      { 
        label: "Ecommerce", 
        icon: <FiShoppingCart className="inline mr-2" />,
        children: [
          { label: "Magento", path: "/services/ecommerce/magento" },
          { label: "BigCommerce", path: "/services/ecommerce/bigcommerce" },
          { label: "Shopify", path: "/services/ecommerce/shopify" },
          { label: "Demandware", path: "/services/ecommerce/demandware" }
        ]
      },
      { 
        label: "Headless PWA", 
        icon: <FiLayers className="inline mr-2" />,
        
      },
      { 
        label: "ERP Integration", 
        icon: <FiTool className="inline mr-2" />,
        children: [
          { label: "Epicor Integration", path: "/services/erp-integration/epicor" },
          { label: "DDI Integration", path: "/services/erp-integration/ddi" },
          { label: "Netsuite Integration", path: "/services/erp-integration/netsuite" },
          { label: "Lightspeed Integration", path: "/services/erp-integration/lightspeed" },
        ]
      },
      { 
        label: "Data Analysis", 
        icon: <FiBarChart2 className="inline mr-2" />,
        children: [
          { label: "Primary Market Research", path: "/services/data-analysis/primary" },
          { label: "Secondary Market Research", path: "/services/data-analysis/secondary" },
          { label: "Quantitative Market Research", path: "/services/data-analysis/quantitative" },
          { label: "Quanlitative Market Research", path: "/services/data-analysis/qualitative" },
        ]
      },
      { 
        label: "Marketing", 
        // icon: <FiMegaphone className="inline mr-2" />,
        children: [
          { label: "Digital Marketing", path: "/services/marketing/digital-marketing" },
          { label: "SEO Optimization", path: "/services/marketing/seo" },
          { label: "Analytics & Insights", path: "/services/marketing/analytics" }
        ]
      },
      { 
        label: "Mobile App", 
        icon: <FiSmartphone className="inline mr-2" />,
        children: [
          { label: "iOS Applications", path: "/services/mobile-app/ios" },
          { label: "Android Applications", path: "/services/mobile-app/android" },
          { label: "Cross-Platform Applications", path: "/services/mobile-app/cross-platform" },
          { label: "React Native Applications", path: "/services/mobile-app/react-native" },
          { label: "Flutter Applications", path: "/services/mobile-app/flutter" },
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
    label: "Portfolio", 
    path: "/portfolio" 
  }
];
