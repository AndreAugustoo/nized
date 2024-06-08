type Props = {
    data: string [][];
    onCancel: () => void;
    onSubmit: (data: any) => void;
};

export const ImportCard = ({
    data,
    onCancel,
    onSubmit
}: Props) => {
    return (
        <div>
            Import Card
        </div>
    );
};