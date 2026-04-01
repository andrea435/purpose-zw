import Layout from "@/components/Layout";
import React from "react";
import HeroComp from "@/components/HeroComp";
import { FileText, Download, ExternalLink } from "lucide-react";

const auditedFiles = [
  {
    title: "Audited Financial Statement USD 2025",
    file: "/PURPOSE ASSET MANAGEMENT  2025 AUDIT FINANCIALS USD.pdf",
    description: "Annual audited financial statements for the year 2025.",
  },
  {
    title: "Audited Financial Statement ZWG 2025",
    file: "/PURPOSE ASSET MANAGEMENT 2025 AUDITED FINANCIAL STATEMENTS -ZWG.pdf",
    description: "Annual audited financial statements for the year 2025.",
  },
  
];

const AuditedAccountsPage = () => {
  const breadcrumbs = [
    { href: "/", label: "Home" },
    { href: "/auditedaccounts", label: "Audited Accounts" },
  ];

  return (
    <Layout>
      <HeroComp
        image="slider-4-2.jpg"
        title="Audited Accounts"
        tagline="Access our published financial reports and statements."
        breadcrumbs={breadcrumbs}
      />

      <div className="py-10 px-4 max-w-6xl mx-auto">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Financial Reports Directory
          </h2>
          <p className="text-gray-600 text-base max-w-2xl">
            Browse and download available audited accounts and related financial
            reports.
          </p>
        </div>

        <div className="grid gap-5">
          {auditedFiles.map((item, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-2xl p-5 bg-white shadow-sm hover:shadow-md transition"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="bg-red-50 text-green-400 p-3 rounded-xl">
                    <FileText size={24} />
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 mt-1">{item.description}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href={item.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-900 text-white hover:bg-gray-800 transition"
                  >
                    <ExternalLink size={18} />
                    View
                  </a>

                  <a
                    href={item.file}
                    download
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-gray-300 text-gray-700 hover:bg-gray-50 transition"
                  >
                    <Download size={18} />
                    Download
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default AuditedAccountsPage;