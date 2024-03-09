namespace sap.export;

entity export {
    key Id                          : Integer;
        Company_Code                : String(111);
        Fiscal_Year                 : String(111);
        Document_Type               : String(111);
        Document_Number             : String(111);
        Document_Line_Number        : String(111);
        Tax_Line_Number             : String(111);
        One_Source_Transaction_Type : String(111);
}