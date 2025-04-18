import { Editor } from '@tinymce/tinymce-react';

function TinyMCE({editorRef, defaultContent}) {
  return (
    <>
      <Editor
        apiKey='ry8blpvgdio78jvdulbi2miowdr73652fehs744jqv15d3g5'
        onInit={(_, editor) => (editorRef.current = editor)}
        initialValue={defaultContent}
        init={{
          height: 500,
          menubar: false,
          plugins: [
            'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
            'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
            'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
          ],
          toolbar: 'undo redo | blocks | ' +
            'bold italic forecolor | alignleft aligncenter ' +
            'alignright alignjustify | bullist numlist outdent indent | ' +
            'removeformat | help',
          content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
        }}
      />
    </>
  );
}

export default TinyMCE;
