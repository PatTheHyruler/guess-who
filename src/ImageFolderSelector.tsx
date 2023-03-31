import React, { useCallback, useMemo } from 'react';
import path from 'path-browserify';
import Dropzone, { DropzoneInputProps, FileWithPath } from 'react-dropzone';
import './ImageFolderSelector.css';

interface ExtendedDropzoneInputProps extends DropzoneInputProps {
    webkitdirectory: string
}

interface ImageFolderSelectorProps {
    addPerson: (name: string, imagePath: string) => void
}

function ImageFolderSelector(props: ImageFolderSelectorProps) {
    const memoizedProps = useMemo(() => props, [props]);

    const onDrop = useCallback((acceptedFiles: FileWithPath[]) => {
        const imageFiles = acceptedFiles.filter((file) => file.type.startsWith('image/'));
        for (const file of imageFiles) {
            const imagePath = URL.createObjectURL(file);
            memoizedProps.addPerson(path.parse(file.name).name, imagePath);
        }
    }, [memoizedProps]);

    return (
        <Dropzone onDrop={onDrop}>
          {({ getRootProps, getInputProps }) => (
            <div className='drop-zone' {...getRootProps()}>
              <input className='drop-zone' {...getInputProps<ExtendedDropzoneInputProps>({ webkitdirectory: 'true' })} />
              <p className='drop-zone'>Drag and drop image files here</p>
            </div>
          )}
        </Dropzone>
      );
}

export default ImageFolderSelector;
