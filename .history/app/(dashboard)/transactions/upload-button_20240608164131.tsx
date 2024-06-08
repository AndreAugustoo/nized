import { Upload } from "lucide-react";
import { useCSVReader } from "react-papaparse";

import { Button } from "@/components/ui/button";

type Props = {
    onUpload: (results: any) => void;
};

export const UploadButton = ({ onUpload }: Props) => {
    const { CSVReader } = useCSVReader();

    //TODO: Add a paywall

    return  (
        <CSVReader>
            {({ getRootProps }: any) => (
                <Button
                    size="sm"
                    className="w-full lg:W-auto"
                    {...getRootProps()}
                >

                </Button>
            )}
        </CSVReader>
    );
};