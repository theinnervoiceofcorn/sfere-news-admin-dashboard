import { useState } from "react";
import { cn } from "@/shared/lib";
import { TableCell, TableRow } from "@/shared/ui/table";
import { Dialog, DialogContent, DialogTrigger } from "@/shared/ui/dialog";
import { Collapsible, CollapsibleTrigger } from "@/shared/ui/collapsible";
import { Button } from "@/shared/ui/button";
import { IFeedItemEntity } from "../model";

export const FeedItem = ({
  feedItem,
  deleteFeature,
  updateFeature,
}: IFeedItemEntity) => {
  const [titleIsOpen, setTitleIsOpen] = useState(false);
  const [descIsOpen, setDescIsOpen] = useState(false);

  return (
    <TableRow key={feedItem.id}>
      <TableCell>{feedItem.id ?? "No Data"}</TableCell>
      <TableCell>{feedItem.feed_id ?? "No Data"}</TableCell>
      <TableCell>{feedItem.category_id ?? "No Data"}</TableCell>
      <TableCell>
        <Collapsible
          open={titleIsOpen}
          onOpenChange={setTitleIsOpen}
          className="max-w-[15vw] space-y-2" // Keep width constraint
        >
          <CollapsibleTrigger asChild>
            <div
              className={cn(
                "rounded-md py-3 font-mono text-sm cursor-pointer",
                titleIsOpen
                  ? "text-wrap whitespace-normal" // Full text when open
                  : "whitespace-nowrap overflow-hidden overflow-ellipsis" // Truncated when closed
              )}
            >
              {feedItem.title ? (
                titleIsOpen ? (
                  <a href={feedItem.link} className="underline">
                    {feedItem.title ?? "No Data"}
                  </a>
                ) : (
                  feedItem.title
                )
              ) : (
                "No Data"
              )}
            </div>
          </CollapsibleTrigger>
        </Collapsible>
      </TableCell>
      <TableCell>
        <Collapsible
          open={descIsOpen}
          onOpenChange={setDescIsOpen}
          className="max-w-[25vw] space-y-2"
        >
          <CollapsibleTrigger asChild>
            <div
              className={cn(
                "rounded-md py-3 font-mono text-sm cursor-pointer",
                descIsOpen
                  ? "text-wrap whitespace-normal"
                  : "whitespace-nowrap overflow-hidden overflow-ellipsis"
              )}
            >
              {feedItem.description ?? "No Data"}
            </div>
          </CollapsibleTrigger>
        </Collapsible>
      </TableCell>
      <TableCell>{feedItem.lang ?? "No Data"}</TableCell>
      <TableCell>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="secondary" className="cursor-pointer">
              Thumbnail
            </Button>
          </DialogTrigger>
          <DialogContent>
            <img
              src={feedItem.thumbnails?.dld_url}
              width={feedItem.thumbnails?.width}
              height={feedItem.thumbnails?.height}
              alt={feedItem.thumbnails?.alt_text}
              className="p-5"
            />
          </DialogContent>
        </Dialog>
      </TableCell>
      <TableCell>{updateFeature}</TableCell>
      <TableCell>{deleteFeature}</TableCell>
    </TableRow>
  );
};
