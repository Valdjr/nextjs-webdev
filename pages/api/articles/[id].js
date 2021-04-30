export default ({query: {id}}, res) => {
    res.status(200).json({ id, title: 'Artigo ' + id })
}