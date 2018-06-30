export interface IButtonSharedProps {
    onClick?: (name: string | undefined, value: string | undefined) => void;
    label: string;
    disabled?: boolean;
    appearance?: ShButtonAppeareance;
    classes?: string;
    name?: string;
    value?: string;
    size?: 'small' | 'average' | 'large';
}

export type ShButtonAppeareance = 'main' | 'menu-button' | 'header-secondary';