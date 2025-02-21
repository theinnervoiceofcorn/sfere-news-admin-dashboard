import { useSelector } from "react-redux";
import { RootState } from "@/app/store";
import { TableCell, TableRow } from "@/shared/ui/table";
import { ICategory } from "../model";

export const Category = ({
  category,
  deleteFeature,
  updateFeature,
}: ICategory) => {
  const selectedLanguage = useSelector(
    (state: RootState) => state.language.selectedLanguage
  );

  const prioritizedTranslation = category.translations.find(
    (t) => t.lang === selectedLanguage
  );

  return (
    <TableRow key={category.id}>
      <TableCell>{category.id ?? "No Data"}</TableCell>
      <TableCell>{prioritizedTranslation?.lang ?? "No Data"}</TableCell>
      <TableCell>
        <img src={category.icon_url} alt="Icon" width={40} height={40} />
      </TableCell>
      <TableCell>{prioritizedTranslation?.name ?? "No Data"}</TableCell>
      <TableCell className="flex flex-row-reverse gap-5" align="right">
        {deleteFeature} {updateFeature}
      </TableCell>
    </TableRow>
  );
};
